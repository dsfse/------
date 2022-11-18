$(document).ready(function(){

    $('.header nav > ul').on('mouseenter focusin',function(){
        $(this).addClass('open')
    })
    $('.header nav > ul').on('mouseleave',function(){
        $(this).removeClass('open')
    })


    // 좌우 슬라이드

    let idx = 1
    let pop_left
    
    setInterval(function(){
        if(idx < 3){
            idx ++
        }else{
            idx = 1
        }
        pop_left = -(idx-1)*1200
        $('.slide ul').animate({
            left:pop_left
        },500)
    },3000);


    $('.contents .bbs > ul > li').on('click',function(){
        $('.contents .bbs > ul > li').removeClass('active')
        $(this).addClass('active')  
    });


    $('.bbs .pop').on('click',function(){
        $('.modal').show()
    });
    $('.modal button').on('click',function(){
        $('.modal').hide()
    });

});