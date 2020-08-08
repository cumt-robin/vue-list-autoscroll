import { getType, isObject, isArray, isBasicType } from "./type";

/**
 * 深拷贝，此处不考虑Symbol,Map,Set,Function等数据类型
 * @param {any} obj 待深拷贝的数据
 */
export function deepClone(obj) {
    let newObj;
    if (isObject(obj)) {
        newObj = {};
        Object.keys(obj).forEach(key => {
            newObj[key] = deepClone(obj[key]);
        });
    } else if (isArray(obj)) {
        newObj = [];
        obj.forEach(item => {
            newObj.push(deepClone(item));
        });
    } else {
        newObj = obj;
    }
    return newObj;
}

// 比较值是否一样，如果是引用类型，会通过递归方式去比较值
export function isEqual(obj1, obj2) {
    let [type1, type2] = [getType(obj1), getType(obj2)];
    if (type1 === type2) {
        if (isBasicType(obj1)) {
            return obj1 === obj2;
        } else if (type1 === 'object') {
            return Object.keys(obj1).every(key => {
                return isEqual(obj1[key], obj2[key]);
            });
        } else if (type1 === 'array') {
            return obj1.every((item, index) => {
                return isEqual(item, obj2[index]);
            });
        } else if (type1 === 'function' || type1 === 'symbol') {
            return obj1.toString() === obj2.toString();
        } else if (type1 === 'map') {
            let handledKeys1 = Array.from(obj1.keys());
            let handledKeys2 = Array.from(obj2.keys());
            return handledKeys1.length === handledKeys2.length && handledKeys1.every(key => isEqual(obj1.get(key), obj2.get(key)));
        } else if (type1 === 'set') {
            let handledArray1 = Array.from(obj1.values());
            let handledArray2 = Array.from(obj2.values());
            return handledArray1.length === handledArray2.length && handledArray1.every((item, index) => isEqual(item, handledArray2[index]));
        } else {
            // 未知类型
            return false;
        }
    } else {
        // 类型不一致，无需比较
        return false;
    }
}

function findIndex(arr, item) {
    let targetIndex = -1;
    for (let index = 0; index < arr.length; index++) {
        if (isEqual(arr[index], item)) {
            targetIndex = index;
            break;
        } else {
            continue;
        }
    }
    return targetIndex;
}

// 合并两个数据，用于支撑merge方法
function mergeTwo(obj1, obj2) {
    let dataType1 = getType(obj1);
    let dataType2 = getType(obj2);
    if (dataType1 === dataType2) {
        // 如果合并的两个数据类型一致，才进行处理，否则直接返回obj1
        if (dataType1 === 'object') {
            // Object类型
            Object.keys(obj2).forEach(key => {
                // 遍历obj2的keys
                if (obj1.hasOwnProperty(key)) {
                    // 如果obj1包含obj2的key，采用合并策略
                    obj1[key] = mergeTwo(obj1[key], obj2[key]);
                } else {
                    // 不包含，则直接赋值
                    obj1[key] = deepClone(obj2[key]);
                }
            });
        } else if (dataType1 === 'array') {
            // Array类型
            obj2.forEach(item => {
                // 遍历obj2
                if (contains(obj1, item)) {
                    // 合并数组不能forEach按顺序遍历，只能判断是否包含，如果obj1包含item，采用合并策略
                    let dataindex = findIndex(obj1, item);
                    obj1[dataindex] = mergeTwo(obj1[dataindex], item);
                } else {
                    // 不包含，直接push
                    obj1.push(deepClone(item));
                }
            });
        } else if (isBasicType(obj1)) {
            obj1 = obj2;
        }
    }
    return obj1;
}

// 合并多个对象
export function merge(srcObj, ...objs) {
    let srcObjType = getType(srcObj);
    if (srcObjType === 'object' || srcObjType === 'array') {
        let isSameType = objs.every(item => {
            return getType(item) === srcObjType;
        });
        if (isSameType) {
            // 是同样的类型，进行合并操作
            if (srcObjType === 'object') {
                // object
                return [srcObj, ...objs].reduce((preVal, curVal) => {
                    return mergeTwo(preVal, curVal);
                }, {});
            } else {
                // array
                return [srcObj, ...objs].reduce((preVal, curVal) => {
                    return mergeTwo(preVal, curVal);
                }, []);
            }
        } else {
            // 类型不一致，直接深拷贝源对象
            return deepClone(srcObj);
        }
    } else {
        // 其他数据类型
        throw new Error('only support type of object or array!');
    }
}