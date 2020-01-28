function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

$('.buttom-1').mouseenter(function (e) {
        const buttom = e.currentTarget;
        $(buttom).css('background-color', 'rgba(255, 255, 255, 1)').css('color', 'rgba(0,0,0,1)');
        $(buttom).find("b").css('top', '-10px').css('left', '-10px').css('right', '-10px').css('bottom', '-10px').css('border', 'rgba(255, 255, 255, 1) solid 1px');
    }
).mouseleave(
    function (e) {
        const button = e.currentTarget;
        $(button).css('background-color', 'transparent').css('color', 'rgba(255, 255, 255, 1)');
        console.log(e.currentTarget)
        $(button).find("b").css('top', '0').css('left', '0').css('right', '0').css('bottom', '0').css('border', 'rgba(255, 255, 255, 1) solid 0px');
    });


$('.buttom-2').mouseover(function (e) {
    const dom = e.currentTarget;
    $(dom).find("i").css('margin-left', '10px').css('opacity', '100');
    $(dom).css('padding-left', '20px').css('text-decoration', 'black solid 2px !important');
}).mouseout(function (e) {
    const dom = e.currentTarget;
    $(dom).find("i").css('margin-left', '0px').css('opacity', '0');
    $(dom).css('padding-left', '0').css('text-decoration', 'black solid 0px !important');
});

$(window).scroll(async function() {
    var hT = $('.main').offset().top,
        hH = $('.main').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        // console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH) -200 ){
        // await sleep(1000);
        $('.nav-1').css('background-color','rgb(0,0,0)');
    }else {
        $('.nav-1').css('background-color','transparent');
    }
    });

    async function openMenu_1() {
    $('.nav-1 .item').css('right','0');
    $('.nav-1 .after').css('display','block');
    await sleep(10);
    $('.nav-1 .after').css('opacity','.5');
}
    async function closeMenu_1() {
    $('.nav-1 .after').css('opacity','.0');
    await sleep(100);
    $('.nav-1 .after').css('display','none');
    $('.nav-1 .item').css('right','-50%');
}