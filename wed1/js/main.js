$(document).ready(function(){
    $('header nav > ul > li').on('mouseenter focusin',function(){
        $(this).addClass('open')
    })
    $('header nav > ul > li').on('mouseleave',function(){
        $(this).removeClass('open')
    })

    $('.content .bbs > ul > li').on('click',function(){
        $('.content .bbs > ul > li').removeClass('active')
        $(this).addClass('active')
    });

    let idx=1 
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        
        // console.log(idx)
        $('.slide ul li').removeClass('active')
        $('.slide ul li').eq(idx-1).addClass('active')
    },3000);

    $('.bbs .pop').on('click',function(){
        $('.modal').show()
    });
    $('.modal button').on('click',function(){
        $('.modal').hide()
    });

});