$(document).ready(function(){
    $('.header .gnb .gnb_wrap > ul').on('mouseenter focusin',function(){
        $('.header').addClass('open')
    });
    $('.header .gnb .gnb_wrap > ul').on('mouseleave',function(){
        $('.header').removeClass('open')
    });

    $('.footer .btn_top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    });

});