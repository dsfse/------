$(document).ready(function(){
    $('.header .inner .gnb > ul').on('mouseenter focusin',function(){
        $(this).addClass('open')
    });
    $('.header .inner .gnb > ul').on('mouseleave',function(){
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

    $('.contents .inner .notice .open').on('click',function(){
        ('modal').show()
    });
});