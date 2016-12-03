<template>
  <div id="left-sidebar">
    <!-- 用户信息 Start-->
    <div class="tpl-sidebar-user-panel">
      <div class="tpl-user-panel-slide-toggleable">
        <div class="tpl-user-panel-profile-picture">
          <img src="{{user.avatar}}" alt="">
        </div>
          <span class="user-panel-logged-in-text">
              <i class="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>
              禁言{{user.name}}
          </span>
        <a href="javascript:;" class="tpl-user-panel-action-link"> <span class="am-icon-pencil"></span> 账号设置</a>
      </div>
    </div>
    <!-- 用户信息 End -->

    <!-- 菜单 Start -->
    <ul class="sidebar-nav">
      <li class="sidebar-nav-link">
        <a v-link="{path:'/hello'}">
          <i class="am-icon-home sidebar-nav-link-logo"></i> 测试
        </a>
      </li>

      <li class="sidebar-nav-link">
        <a href="javascript:;" class="sidebar-nav-sub-title">
          <i class="am-icon-table sidebar-nav-link-logo"></i> 数据列表
          <span class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
        </a>
        <ul class="sidebar-nav sidebar-nav-sub">
          <li class="sidebar-nav-link">
            <a href="table-list.html">
              <span class="am-icon-angle-right sidebar-nav-link-logo"></span> 文字列表
            </a>
          </li>

          <li class="sidebar-nav-link">
            <a href="table-list-img.html">
              <span class="am-icon-angle-right sidebar-nav-link-logo"></span> 图文列表
            </a>
          </li>
        </ul>
      </li>
      <li v-for="menu in menuList" class="sidebar-nav-link">
        <a href="javascript:;" class="sidebar-nav-sub-title">
          <i class="am-icon-table sidebar-nav-link-logo"></i> {{menu.text}}
          <span v-show="menu.secondMenus.length>0" class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
        </a>
        <ul v-show="menu.secondMenus.length>0" class="sidebar-nav sidebar-nav-sub">
          <li v-for="secondMenu in menu.secondMenus" class="sidebar-nav-link">
            <a href="table-list.html">
              <span class="am-icon-angle-right sidebar-nav-link-logo"></span> {{secondMenu.text}}
            </a>
          </li>
        </ul>
      </li>

    </ul>
    <!-- 菜单 End -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      menuList: {
        type: Array
      },
      user: {
        type: Object
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">

</style>
