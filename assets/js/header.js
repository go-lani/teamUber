$('.util-list li a').on('click', function(){
    var $li  = $(this).parent();
    var $idx = $li.index();

    var $gnbTab = $('.navigation > section');

    $li.addClass('on').siblings().removeClass('on');
    $gnbTab.eq($idx).addClass('on').siblings().removeClass('on');
});