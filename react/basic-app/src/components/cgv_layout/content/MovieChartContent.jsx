
export default function MovieChartContent(){
    return (
        <div class="list_area">                
            <div class="slide_area movie active">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="thumb">
                                <img src="img/88738_320.jpg" alt="" />
                                <div class="dim">
                                    <a href="">상세보기</a>
                                    <a href="">예매하기</a>
                                </div>
                            </div>
                            <div>
                                <strong>보통의 가족1</strong>
                                <div>
                                    <span>98%</span>
                                    <span>예매율 17.0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    );
}