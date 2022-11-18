$(document).ready(function(){
    $('.header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $(this).addClass('open')
    });
    $('.header .gnb .depth1 > li').on('mouseleave', function(){
        $(this).removeClass('open')
    });

    let idx = 1
    let obj_top

    setInterval(function(){
        if(idx < 3){
            idx ++
        }else{
            idx = 1
        }
        obj_top = -(idx - 1)*300
        $('.slide ul').animate({
            top:obj_top
        },500)
        console.log(idx)
    },3000);

    $('.contents .inner .bbs > ul > li').on('click',function(){
        $('.contents .inner .bbs > ul > li').removeClass('active')
        $(this).addClass('active')
    });

    $('.contents .inner .bbs .notice .detail ul li').on('click',function(){
        $('.modal').show()
    });
    $('.modal button').on('click',function(){
        $('.modal').hide()
    });

});