$(document).ready(function(){

    $('.header .gnb > ul > li').on('mouseenter focusin',function(){
        $(this).addClass('open')
    });
    $('.header .gnb > ul > li').on('mouseleave',function(){
        $(this).removeClass('open')
    });


    let idx = 1
    let pop_left

    setInterval(function(){
        if(idx < 3){
            idx ++
        }else{
            idx = 1
        }
        pop_left = -(idx-1)*800
        $('.container .slide ul').animate({
            left:pop_left
        },500)
    },3000);

    $('.container .content .notice ul .pop').on('click',function(){
        $('.modal').show()
    });
    $('.modal button').on('click',function(){
        $('.modal').hide()
    });

});