$(document).ready(function(){
    let product_name
    $('.product .product_menu .menu ul li').on('click',function(){
        $('.product .product_menu .menu ul li').removeClass('active')
        $(this).addClass('active')
        product_name = $(this).attr('data-name')
        $('.product .product_detail > ul > li').removeClass('active')
        $('.product .product_detail > ul > li[class = "'+product_name+'"]').addClass('active')
    });

    const swiper = new Swiper('.sns .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        centeredSlides: true,
        loop: true,
        breakpoints: {
            700: {    /* 640px 이상일때 적용 */
                spaceBetween: 30,
            },
            850: {    /* 1200px 이상일때 적용 */
            spaceBetween: 40,
            },
            1440: {    /* 1440px 이상일때 적용 */
            spaceBetween: 40,
            },
        },
    });

});