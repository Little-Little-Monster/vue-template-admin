$(function() {
    autoLeftNav();
    $(window).resize(function() {
        autoLeftNav();
        console.log('window.width',$(window).width());
        console.log('window.height',$(window).height());
    });

    //设置左侧菜单高度
    $('#left-sidebar').height($(window).height() - $('header').height());

    // 二级菜单
    $('body').on('click','.sidebar-nav-sub-title', function() {
        $(this).siblings('.sidebar-nav-sub').slideToggle(80)
        .end()
        .find('.sidebar-nav-sub-ico').toggleClass('sidebar-nav-sub-ico-rotate');
    });

    // 风格切换
    $('.tpl-skiner-toggle').on('click', function() {
        $('.tpl-skiner').toggleClass('active');
    });

    $('.tpl-skiner-content-bar').find('span').on('click', function() {
        $('body').attr('class', $(this).attr('data-color'));
        saveSelectColor.Color = $(this).attr('data-color');
        // 保存选择项
        storageSave(saveSelectColor);
    });
});

// 侧边菜单开关
function autoLeftNav() {
    $('body').on('click','.tpl-header-switch-button', function() {
        if ($('.left-sidebar').is('.active')) {
          if ($(window).width() > 1024) {
            $('.tpl-content-wrapper').removeClass('active');
          }
          $('.left-sidebar').removeClass('active');
        } else {
          $('.left-sidebar').addClass('active');
          if ($(window).width() > 1024) {
            $('.tpl-content-wrapper').addClass('active');
          }
        }
    });

    if ($(window).width() < 1024) {
        $('.left-sidebar').addClass('active');
    } else {
        $('.left-sidebar').removeClass('active');
    }
}

