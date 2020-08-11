# vue-list-autoscroll

这是一个vue指令，可以支持菜单横向滚动，当鼠标置于滚动容器的边界时，会触发滚动。当然该指令也不局限于菜单场景，其他的DOM元素也可以使用，使用时需要注意以下几点：

1. 使用该指令时，建议使用这样的三层结构：div（滚动容器） > ul（横向列表） > li（列表元素）

```html
<div class="scroll__wrapper">
  <ul class="scroll__list">
    <li class="scroll__item"></li>
    <li class="scroll__item"></li>
  </ul>
</div>
```

2. div（滚动容器）应该是有确定的宽度，比如500px；必须指定`overflow: hidden;`
3. ul（横向列表）应该设置样式

```css
display: inline-block;
white-space: nowrap;
```

4. li（列表元素）应该设置样式

```css
display: inline-block;
```

# 安装和使用

## npm引入

### 安装

```shell
npm install --save vue-list-autoscroll
```

### 使用

#### 全局注册指令

```javascript
import Vue from 'vue'
import VueListAutoscroll from "vue-list-autoscroll"
Vue.use(VueListAutoscroll)
```

#### 局部引入指令

```javascript
import VueListAutoscroll from "vue-list-autoscroll"

export default {
  name: 'SomeComponent'
  mounted() {},
  directives: {
    autoscroll: VueListAutoscroll
  },
  // 其他代码
}
```

#### 使用示例

```html
<div class="scroll__wrapper" v-autoscroll="{step: 8, triggerDistance: 160}">
  <ul class="scroll__list">
    <li class="scroll__item" v-for="menu in menuList" :key="menu.id">{{menu.name}}</li>
  </ul>
</div>
```

## script标签引用

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
  <script src="path-to/vue-list-autoscroll.min.js"></script>
</head>
<body>
  <div id="app">
    <div class="scroll__wrapper" v-autoscroll="{step: 8, triggerDistance: 160, delay: 1000}">
      <ul class="scroll__list">
        <li class="scroll__item" v-for="menu in menuList" :key="menu.id">
          {{menu.name}}
        </li>
      </ul>
    </div>
  </div>
  <script>
    var menuList = [];
    for (var index = 0; index < 16; index++) {
      var element = {
        id: index + 1,
        name: '导航' + (index + 1)
      };
      menuList.push(element)
    }
    var app = new Vue({
      el: "#app",
      data: {
        menuList: menuList
      },
    })
  </script>
</body>
</html>
```

# 支持的指令参数

| 参数             | 说明                        | 类型     | 是否必传 | 可选值 | 默认值                                                       |
| ---------------- | --------------------------- | -------- | -------- | ------ | :----------------------------------------------------------- |
| step       | 代表每次raf时移动的距离，单位是px                      | Number   | false    |        | 6                                                            |
| triggerDistance        | 代表触发滚动的距离条件，单位是px                    | Number   | false    |        | 150                                                          |
| delay        | 滚动延时，单位是ms。考虑到用户可能需要点击中间的某些导航或内容，所以必须加一个滚动的延时参数，防止用户点不到想要的内容                    | Number   | false    |        | 500                                                          |