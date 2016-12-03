<template>
  <div class="am-g tpl-g">
    <!-- 头部 Start -->
    <v-header :user="user"></v-header>
    <!-- 头部 End -->

    <!-- 风格切换 Start -->
    <div class="tpl-skiner">
      <div class="tpl-skiner-toggle am-icon-cog">
      </div>
      <div class="tpl-skiner-content">
        <div class="tpl-skiner-content-title"> 选择主题 </div>
        <div class="tpl-skiner-content-bar">
          <span class="skiner-color skiner-white" data-color="theme-white"></span>
          <span class="skiner-color skiner-black" data-color="theme-black"></span>
        </div>
      </div>
    </div>
    <!-- 风格切换 End -->

    <!-- 侧边导航栏 Start -->
    <div class="left-sidebar">
      <!--左侧权限导航-->
      <left-menu :menu-list="menuList" :user="user"></left-menu>
    </div>
    <!-- 侧边导航栏 End -->

    <!-- 内容区域 Start-->
    <div class="tpl-content-wrapper pd">
      <div>
        <a v-link="{path:'/hello'}">go hello</a>
        <a v-link="{path:'/login'}">go login</a>
        <a v-link="{path:'/header'}">go header</a>
        <a v-link="{path:'/headerdsds'}">go dasdasd</a>

        <!-- 下拉列表 -->
        <div class="am-dropdown" data-am-dropdown>
          <button class="am-btn am-btn-primary am-dropdown-toggle" data-am-dropdown-toggle>下拉列表 <span class="am-icon-caret-down"></span></button>
          <ul class="am-dropdown-content">
            <li class="am-dropdown-header">标题</li>
            <li><a href="#">快乐的方式不只一种</a></li>
            <li class="am-active"><a href="#">最荣幸是</a></li>
            <li><a href="#">谁都是造物者的光荣</a></li>
            <li class="am-disabled"><a href="#">就站在光明的角落</a></li>
            <li class="am-divider"></li>
            <li><a href="#">天空海阔 要做最坚强的泡沫</a></li>
          </ul>
        </div>
      </div>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
    <!-- 内容区域 End-->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'dashborader/header/header.vue';
  import leftMenu from 'dashborader/leftMenu/leftMenu.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        user: {},
        menuList: []
      };
    },
    ready() {
      let that = this;
      //$.getJSON('static/data.json',function(data){
      //    console.log(data);
      //    that.obj = data;
      //});
      that.$http.get('static/data.json').then((response) => {
        //that.$set('obj',response.body)
        that.user = response.body.user;
        that.menuList = response.body.menu.menus;
      });
    },
    components: {
      'v-header': header,
      'left-menu': leftMenu
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  .pd{
    padding: 2px;
  }
</style>
