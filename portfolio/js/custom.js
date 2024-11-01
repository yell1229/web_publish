$(function(){
    Splitting();

    // nav
    $('.nav-area nav a').on('click',function(e){
        e.preventDefault();
        let get_target = $(this).attr('href');
        $('html, body').animate({scrollTop:$(get_target).offset().top},300);
    });
    
    $('.home .btn').on('click',function(){
        let btn_target = $('#contact').offset().top;
        $('html, body').animate({scrollTop:btn_target},300);
    })
    let defaultScroll = 0;
    $(window).on('scroll',function(){
        let win_scroll = $(this).scrollTop();
        // console.log('win_scroll',win_scroll);
        if(defaultScroll < win_scroll){
            $('.nav-area').addClass('active');
        }else{
            $('.nav-area').removeClass('active');
        }
        defaultScroll = win_scroll;
    });
    // gsap.utils.toArray(".box").forEach((panel, i) => {
    //     ScrollTrigger.create({
    //         trigger: panel,
    //         start: "top top",
    //         pin: true, 
    //         pinSpacing: false 
    //     });
    // });

    
});