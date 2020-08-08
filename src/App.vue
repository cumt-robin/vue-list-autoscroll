<template>
    <div id="app">
        <h2>vue-autoscroll</h2>
        <p style="width:800px;">这是一个vue指令，可以支持菜单横向滚动，当鼠标置于滚动容器的边界时，会触发滚动。当然该指令也不局限于菜单场景，其他的DOM元素也可以使用，使用时需要注意以下几点：</p>
        <ul class="info-list">
            <li>使用该指令时，应该是这样的三层式结构
                <code>div（滚动容器） > ul（横向列表） > li（列表元素）</code>
            </li>
            <li>div（滚动容器）应该是有确定的宽度，比如500px；应该指定<code>overflow: hidden</code></li>
            <li>ul（横向列表）应该设置样式<code>display: inline-block; white-space: nowrap;</code></li>
            <li>li（列表元素）应该设置样式<code>display: inline-block;</code></li>
        </ul>
        <p style="width:800px;">指令支持传入一个对象作为参数，<code>v-autoscroll="{step: 8, triggerDistance: 360}"</code></p>
        <ul class="info-list">
            <li><code>step</code>代表每次移动的px，默认是6</li>
            <li><code>triggerDistance</code>代表触发滚动的距离条件，默认是150</li>
        </ul>
        <div class="scroll__wrapper" v-autoscroll="{step: 8, triggerDistance: 160}">
            <ul class="scroll__list">
                <li class="scroll__item" v-for="menu in menuList" :key="menu.id">{{menu.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
// 局部引入
// import VueAutoscroll from "./directives";
export default {
    name: 'App',
    data() {
        const menuList = [];
        for (let index = 0; index < 16; index++) {
            const element = {
                id: index + 1,
                name: '导航' + (index + 1)
            };
            menuList.push(element)
        }
        return {
            menuList
        }
    },
    // directives: {
    //     autoscroll: VueAutoscroll
    // }
}
</script>

<style lang="scss" scoped>
#app {
    margin: 40px 80px;
}
.scroll__wrapper {
    margin: 40px;
    width: 600px;
    overflow: hidden;
}
.scroll__list {
    margin: 0;
    padding: 0;
    display: inline-block;
    white-space: nowrap;
}
.scroll__item {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #3b77e3;
    +.scroll__item {
        margin-left: 15px;
    }
}
code {
    padding: 2px 4px;
    border-radius: 4px;
    background-color: #e9e9e9;
    color: #6d5a5a;
}
.info-list {
    >li {
        line-height: 1.8;
    }
}
</style>
