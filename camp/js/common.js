$(document).ready(function(){
    $('.header .gnb .gnb_wrap > ul').on('mouseenter focusin',function(){
        $('.header').addClass('open')
    });
    $('.header .gnb .gnb_wrap > ul').on('mouseleave',function(){
        $('.header').removeClass('open')
    });
});