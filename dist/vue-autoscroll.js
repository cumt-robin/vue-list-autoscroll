(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueAutoscroll", [], factory);
	else if(typeof exports === 'object')
		exports["VueAutoscroll"] = factory();
	else
		root["VueAutoscroll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/utils/dom.js
function getOffset(el) {
  var relativeNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var offsetLeft = 0;
  var offsetTop = 0;
  var parent = el;

  while (parent !== null && parent !== relativeNode) {
    offsetLeft += parent.offsetLeft;
    offsetTop += parent.offsetTop;
    parent = parent.offsetParent;
  }

  return {
    offsetLeft: offsetLeft,
    offsetTop: offsetTop
  };
}
// CONCATENATED MODULE: ./src/utils/type.js
/**
 * 判断变量的数据类型
 * @param {any} val 变量值
 * @returns {string} 数据类型
 */
function getType(val) {
  return Object.prototype.toString.call(val).replace(/\[object\s(\w+)\]/, '$1').toLowerCase();
}
function isObject(val) {
  return getType(val) === 'object';
}
function isArray(val) {
  return getType(val) === 'array';
}
function isNumber(val) {
  return typeof val === 'number';
}
function isString(val) {
  return typeof val === 'string';
}
function isBool(val) {
  return typeof val === 'boolean';
}
function isUndefined(val) {
  return typeof val === 'undefined';
}
function isNull(val) {
  return val === null;
}
function isBasicType(val) {
  return isNumber(val) || isString(val) || isBool(val) || isUndefined(val) || isNull(val);
}
// CONCATENATED MODULE: ./src/utils/helper.js

/**
 * 深拷贝，此处不考虑Symbol,Map,Set,Function等数据类型
 * @param {any} obj 待深拷贝的数据
 */

function deepClone(obj) {
  var newObj;

  if (isObject(obj)) {
    newObj = {};
    Object.keys(obj).forEach(function (key) {
      newObj[key] = deepClone(obj[key]);
    });
  } else if (isArray(obj)) {
    newObj = [];
    obj.forEach(function (item) {
      newObj.push(deepClone(item));
    });
  } else {
    newObj = obj;
  }

  return newObj;
} // 比较值是否一样，如果是引用类型，会通过递归方式去比较值

function isEqual(obj1, obj2) {
  var _ref = [getType(obj1), getType(obj2)],
      type1 = _ref[0],
      type2 = _ref[1];

  if (type1 === type2) {
    if (isBasicType(obj1)) {
      return obj1 === obj2;
    } else if (type1 === 'object') {
      return Object.keys(obj1).every(function (key) {
        return isEqual(obj1[key], obj2[key]);
      });
    } else if (type1 === 'array') {
      return obj1.every(function (item, index) {
        return isEqual(item, obj2[index]);
      });
    } else if (type1 === 'function' || type1 === 'symbol') {
      return obj1.toString() === obj2.toString();
    } else if (type1 === 'map') {
      var handledKeys1 = Array.from(obj1.keys());
      var handledKeys2 = Array.from(obj2.keys());
      return handledKeys1.length === handledKeys2.length && handledKeys1.every(function (key) {
        return isEqual(obj1.get(key), obj2.get(key));
      });
    } else if (type1 === 'set') {
      var handledArray1 = Array.from(obj1.values());
      var handledArray2 = Array.from(obj2.values());
      return handledArray1.length === handledArray2.length && handledArray1.every(function (item, index) {
        return isEqual(item, handledArray2[index]);
      });
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
  var targetIndex = -1;

  for (var index = 0; index < arr.length; index++) {
    if (isEqual(arr[index], item)) {
      targetIndex = index;
      break;
    } else {
      continue;
    }
  }

  return targetIndex;
} // 合并两个数据，用于支撑merge方法


function mergeTwo(obj1, obj2) {
  var dataType1 = getType(obj1);
  var dataType2 = getType(obj2);

  if (dataType1 === dataType2) {
    // 如果合并的两个数据类型一致，才进行处理，否则直接返回obj1
    if (dataType1 === 'object') {
      // Object类型
      Object.keys(obj2).forEach(function (key) {
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
      obj2.forEach(function (item) {
        // 遍历obj2
        if (contains(obj1, item)) {
          // 合并数组不能forEach按顺序遍历，只能判断是否包含，如果obj1包含item，采用合并策略
          var dataindex = findIndex(obj1, item);
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
} // 合并多个对象


function merge(srcObj) {
  var srcObjType = getType(srcObj);

  if (srcObjType === 'object' || srcObjType === 'array') {
    for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objs[_key - 1] = arguments[_key];
    }

    var isSameType = objs.every(function (item) {
      return getType(item) === srcObjType;
    });

    if (isSameType) {
      // 是同样的类型，进行合并操作
      if (srcObjType === 'object') {
        // object
        return [srcObj].concat(objs).reduce(function (preVal, curVal) {
          return mergeTwo(preVal, curVal);
        }, {});
      } else {
        // array
        return [srcObj].concat(objs).reduce(function (preVal, curVal) {
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
// CONCATENATED MODULE: ./src/directives/autoscroll.js





var autoscroll_AutoScrollHelper = /*#__PURE__*/function () {
  function AutoScrollHelper(el, options) {
    classCallCheck_default()(this, AutoScrollHelper);

    var defaultOptions = {
      triggerDistance: 150,
      step: 6
    };
    this.options = merge(defaultOptions, options);
    this.el = el;
    this.isOverflow = false;
    this.isTranslating = false;
    this.translateDirection = ''; // left代表向左滑动

    this.translateMin = 0;
    this.currentTranslateValue = 0;
    this.rafId = null;
    this.firstChild = null;
  }

  createClass_default()(AutoScrollHelper, [{
    key: "handleInserted",
    value: function handleInserted() {
      var _this = this;

      this.el.addEventListener('mouseenter', function (e) {
        _this.checkNodes();
      });
      this.el.addEventListener('mouseleave', function (e) {
        _this.stopTranslate();
      });
      this.el.addEventListener('mousemove', function (e) {
        if (_this.isOverflow) {
          var _getOffset = getOffset(_this.el),
              offsetLeft = _getOffset.offsetLeft;

          if (e.clientX - offsetLeft < _this.options.triggerDistance) {
            _this.translateDirection = 'right';

            if (!_this.isTranslating) {
              _this.startTranslate();
            }
          } else if (_this.containerWidth + offsetLeft - e.clientX < _this.options.triggerDistance) {
            _this.translateDirection = 'left';

            if (!_this.isTranslating) {
              _this.startTranslate();
            }
          }
        }
      });
    }
  }, {
    key: "handleUnbind",
    value: function handleUnbind() {
      this.stopTranslate();
    }
  }, {
    key: "checkNodes",
    value: function checkNodes() {
      var firstChild = this.el.firstChild;

      if (firstChild) {
        this.firstChild = firstChild;
        this.containerWidth = this.el.clientWidth;
        this.scrollListWidth = this.firstChild.clientWidth;
        this.translateMin = this.containerWidth - this.scrollListWidth;

        if (this.scrollListWidth > this.containerWidth) {
          // 发生溢出
          this.isOverflow = true; // console.log('检测到溢出', this.containerWidth, this.scrollListWidth);
        } else {
          // 没有溢出的情况
          this.isOverflow = false; // console.log('未检测到溢出');
        }
      } else {// console.log('子节点还没初始化');
        }
    }
  }, {
    key: "stopTranslate",
    value: function stopTranslate() {
      window.cancelAnimationFrame(this.rafId);
      this.isTranslating = false;
    }
  }, {
    key: "startTranslate",
    value: function startTranslate() {
      var transformValue = this.firstChild.style.transform;
      this.currentTranslateValue = !transformValue || transformValue === 'none' ? 0 : Number(transformValue.replace(/[a-zA-z]+\((-?\d+)px\)/, '$1'));
      this.isTranslating = true;

      if (this.translateDirection === 'left') {
        this.doTranslateLeft();
      } else {
        this.doTranslateRight();
      }
    }
  }, {
    key: "doTranslateLeft",
    value: function doTranslateLeft() {
      var nextValue = this.currentTranslateValue - this.options.step;

      if (nextValue > this.translateMin) {
        this.rafId = window.requestAnimationFrame(this.doTranslateLeft.bind(this));
      } else {
        nextValue = this.translateMin;
        this.isTranslating = false;
      } // 更新行为


      this.firstChild.style.transform = "translateX(".concat(nextValue, "px)");
      this.currentTranslateValue = nextValue;
    }
  }, {
    key: "doTranslateRight",
    value: function doTranslateRight() {
      var nextValue = this.currentTranslateValue + this.options.step;

      if (nextValue < 0) {
        this.rafId = window.requestAnimationFrame(this.doTranslateRight.bind(this));
      } else {
        nextValue = 0;
        this.isTranslating = false;
      } // 更新行为


      this.firstChild.style.transform = "translateX(".concat(nextValue, "px)");
      this.currentTranslateValue = nextValue;
    }
  }]);

  return AutoScrollHelper;
}();

/* harmony default export */ var autoscroll = ({
  bind: function bind(el, binding, vnode) {
    var options = binding.value;
    el.autoScrollHelper = new autoscroll_AutoScrollHelper(el, options);
  },
  inserted: function inserted(el, binding, vnode, oldVnode) {
    el.autoScrollHelper.handleInserted();
  },
  unbind: function unbind(el) {
    el.autoScrollHelper.handleUnbind();
  }
});
// CONCATENATED MODULE: ./src/directives/index.js


autoscroll.install = function (Vue) {
  Vue.directive('autoscroll', autoscroll);
};

if (typeof window !== 'undefined' && window.Vue) {
  autoscroll.install(window.Vue);
}

/* harmony default export */ var directives = __webpack_exports__["default"] = (autoscroll);

/***/ })
/******/ ]);
});