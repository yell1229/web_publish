createSwiper();


function createSwiper(){
    let output = `
        <div class="swiper-wrapper">

        <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231349_727.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231348_727.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231350_727.jpg" alt=""></div>
        ...
        </div>

        <div class="swiper-pagination"></div>
    
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
        <div class="swiper-scrollbar"></div>
    `;
    document.querySelector('.swiper').innerHTML = output;
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView:1,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

}










