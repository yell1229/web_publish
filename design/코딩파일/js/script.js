
$(function(){
    // 스플리팅 호출
    Splitting();
    // 스크롤라 호출
    $('.animate').scrolla({
        mobile: true, // disable animation on mobiles
        once: false // only once animation play on scroll
    });

    // header active
    var prevScrollTop = 0;
    document.addEventListener('scroll',function(){
        var nowScrollTop = $(window).scrollTop();
    
        if(nowScrollTop > prevScrollTop){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    });
    // 스크롤라 length
    $('.svgAni').find('#svgAni01').each(function(i,path){
        var length = path.getTotalLength();
        // alert(length);
    });

});