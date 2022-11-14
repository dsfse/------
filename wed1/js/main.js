$(document).ready(function(){
    $('header nav > ul > li').on('mouseenter focusin',function(){
        $(this).addClass('open')
    })
    $('header nav > ul > li').on('mouseleave',function(){
        $(this).removeClass('open')
    })
});