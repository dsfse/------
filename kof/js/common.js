/* haeder, footer에 포함되는 jquery - 모든 페이지에 공통으로 적용되는 기능 */

$(document).ready(function(){
    // 로딩됐을때 단 한번
    let pcMo; // pc일때 pc, mobile일때는 mobile (현재)
    let winW;
    pcChk(); //함수실행

    // 브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
       pcChk(); //함수실행
    }); // window.resize 종료

    function pcChk(){
        winW = $(window).width();
        if(winW > 640){
            pcMo = 'pc';
        }else{
            pcMo = 'mobile';
        }
        console.log(pcMo);
    }

    $('.haeder .gnb > ul > li').on('mouseenter focusin', function(){
        if(pcMo == 'pc'){
            $('.haeder').addClass('menu_open');
        }
    });
    $('.haeder').on('mouseleave', function(){
        $('.haeder').removeClass('menu_open');
    });
    $('.haeder .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.haeder').removeClass('menu_open');
    });


    let scrolling;
    scrollChk(); // 함수실행

    $(window).scroll(function(){
        scrollChk(); // 함수실행
    });

    function scrollChk(){ // 함수의 선언
        scrolling = $(window).scrollTop();
        console.log(scrolling);
        if(scrolling > 0){
            $('.haeder').addClass('fixed');
        }else{
            $('.haeder').removeClass('fixed');
        }
    }

    $('.haeder .gnb .gnb_open').on('click', function(){
        $('.haeder').addClass('menu_mobile');
    });
    $('.haeder .gnb .gnb_close').on('click', function(){
        $('.haeder').removeClass('menu_mobile');
    });

    $('.haeder .gnb > ul > li > a').on('click', function(e){
        if(pcMo == 'mobile'){
            e.preventDefault();
            $(this).parents('li').toggleClass('sub_open');
        }
    });
    
});// document.ready 종료