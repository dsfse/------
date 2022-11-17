$(document).ready(function(){

    let scrollTop = $(window).scrollTop(); // 로딩됐을때 단 한번 실행
    scrollChk();

    $(window).scroll(function(){ // 스크롤 될때마다 실행
        scrollChk();
    });

    function scrollChk (){
        scrolling = $(window).scrollTop(); 
        // console.log(scrolling, '스크롤될때마다');

        if(scrolling > 0){ //스크롤 중
            $('header').addClass('fixed');
        }else{ // 맨위로 이동
            $('header').removeClass('fixed');
        }
    }

    $('.footer .btn_top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    });

});