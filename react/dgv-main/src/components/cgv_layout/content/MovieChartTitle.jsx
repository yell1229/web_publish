
export default function MovieChartTitle({text1, text2, text3}){
    return (
        <div class="tit_area">
            <div>
                <strong><a href="" data-target=".movie" class="active">{text1}</a></strong>
                <a href="" data-target=".pre_movie">{text2}</a>
            </div>
            <a href="" class="btn_list">{text3}</a>
        </div>
    );
}