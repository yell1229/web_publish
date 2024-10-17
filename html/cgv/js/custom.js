$(document).ready(function(){
    $fix_nav = $('.nav_area').offset().top;
    $(window).on('scroll',function(){
        if($fix_nav < $(window).scrollTop()){
            $('.nav_area').addClass('fixed');
        }else{
            $('.nav_area').removeClass('fixed');
        }

        // console.log($(window).scrollTop());
        if($(window).scrollTop() > 1){
            $('.q_nav_area').addClass('active');
        }else{
            $('.q_nav_area').removeClass('active');
        }
    });


    $('.top_ban_area .btn_x').on('click',function(){
        $(this).parents('.top_ban_area').hide();
    });
    $('header .nav_area .nav').on('mouseenter',function(){
        $target_nav = $('header .nav_area').hasClass('active');
        if(!$target_nav){
            $('header .nav_detail').slideDown();
            $('header .nav_area').addClass('active');
        }
    });
    $('header .nav_area').on('mouseleave',function(){  
        if($(this).hasClass('active')){
            $('header .nav_detail').slideUp();
            $('header .nav_area').removeClass('active');
        }
    });
    $('.q_nav_area .btn_top').on('click',function(){
        $('html, body').animate({scrollTop:0},300);
    });

    var swiper = new Swiper(".movie .swiper", {
        slidesPerView: 5,
        spaceBetween: 32,
        slidesPerGroup: 5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.special .img_list div').on('mouseenter',function(){
        var $btn_idx = $(this).index();
        $('.special .info_area ul li').removeClass('active');
        $('.special .info_area ul li').eq($btn_idx).addClass('active');
        $('.special .img_list div').removeClass('active');
        $(this).addClass('active');
    });
});