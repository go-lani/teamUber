var $nav    = $('.navigation');
var $gnbTab = $nav.children('section');
var $gnbDepth2 = $('.depth2 > li > button');
var $gnbDepth3 = $('.depth3 .gnb-list-box');


var $layout = $('#main, #footer');

$('.util-list li.member a').on('click', function(){
    var $li  = $(this).parent();
    var $idx = $li.index() - 1;

    console.log($idx);
    $('.nav-btn').addClass('close');

    // $('body').css('overflow-y', 'scroll');
    $layout.css('display', 'none');

    if (!$nav.hasClass('open')) {
        $nav.addClass('open');
        $layout.css('display', 'none');
        $('#wrap').css('overflow', 'visible');
    }

    $li.addClass('on').siblings().removeClass('on');
    $gnbTab.eq($idx).attr('aria-hidden', false).siblings().attr('aria-hidden', true);
});

$('.nav-btn').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('close')) {
        $gnbTab.attr('aria-hidden', true);
        // $('body').css('overflow-y', '');
        $(this).removeClass('close');
        $nav.removeClass('open');
        $layout.css('display', 'block');
        $('#wrap').css('overflow', 'hidden');
    } else {
        $(this).addClass('close');
        // $('body').css('overflow-y', 'scroll');
        $('.menu-gnb-area').attr('aria-hidden', false);
        $nav.addClass('open');
        $layout.css('display', 'none');
        $('#wrap').css('overflow', 'visible');
    }
});

$gnbDepth2.on('click', function (e) {
    $idx = $(this).parent().index();

    $(this).parent().addClass('on').siblings().removeClass('on');

    $gnbDepth3.eq($idx).attr('aria-hidden', false).siblings().attr('aria-hidden', true);
});

$('.depth3-list > li > a').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');
});