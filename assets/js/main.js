$('.product-list-tab > a').on('click', function (e) {
    e.preventDefault();

    $prodIdx = $(this).parent().index();

    $(this).attr('aria-selected', true).parent().addClass('on').siblings().removeClass('on').children('a').attr('aria-selected', false);
    $('.product-panel').eq($prodIdx).addClass('on').siblings().removeClass('on');
});