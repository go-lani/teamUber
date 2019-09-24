$('.product-list-tab > a').on('click', function () {
    $prodIdx = $(this).parent().index();

    $(this).parent().addClass('on').siblings().removeClass('on');
    $('.product-panel').eq($prodIdx).addClass('on').siblings().removeClass('on');
});