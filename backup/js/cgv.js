import {kobisBoxOffice, searchMoviePoster} from './cobisCommon.js'

createMovieChartList(1);


// index -> 무비차트 리스트 생성 함수
async function createMovieChartList(page){
    let date = new Date(); // 클래스이며, 힙에 생성된다.
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDate() - 1;
    let searchDt =  date.getFullYear().toString().concat(date.getMonth() + 1,date.getDate() - 1);
    // console.log(searchDt);
    
    kobisBoxOffice('Daily',searchDt)
        .then((result) => {
            let rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let  posterList = []; // Promise type으로 10개의 이미지
            rankList.forEach((element) =>{
                posterList.push(getPoster(element.movieNm, element.openDt.replaceAll('-','')));//kmdb는 비동기 함수라서 실행순서를 보장x
            });
            Promise.all(posterList) // 비동기식 처리를 묶어서 한번에 실행 및 관리
                .then((poster) => { //posterList에 있는 포스터를 꺼낸다.
                    let output = ``;
                    (page === 2) ?  output += `<button id="arrow-left" type="button" class="movie-chart">이전 포스터</button>` : output += ``; 
                    output += `
                    <div class="swiper-wrapper">
                    `;
                    let idx = 0;
                    (page !== 1) ? idx += 5 : idx = 0 ;

                    rankList.forEach((movie,i) => {
                        i += idx;
                        if(i < page * 5){
                        output +=`
                            <div class="swiper-slide">
                                <div class="thumb">
                                    <img src="${poster[i]}" alt="">
                                    <div class="dim">
                                        <a href="">상세보기</a>
                                        <a href="">예매하기</a>
                                    </div>
                                </div>
                                <div>
                                    <strong>${rankList[i].movieNm}</strong>
                                    <div>
                                        <span>${rankList[i].rank}</span>
                                        <span>누적관객수 ${rankList[i].audiAcc}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                        }
                    });
                    output += `
                    </div>
                    `;
                    (page === 1) ?  output += `<button id="arrow-right" type="button" class="movie-chart">다음 포스터</button>` : output += ``; 
                    
                    
                    document.querySelector('.slide_area.movie .swiper').innerHTML = output;
                    
                    // try {
                    //     document.querySelector('#arrow-left').addEventListener('click',() => {
                    //         createMovieChartList(1);
                    //     });
                    // } catch (error) {
                        
                    // }
                    // try {
                    //     document.querySelector('#arrow-right').addEventListener('click',() => {
                    //         createMovieChartList(2);
                    //     });
                    // } catch (error) {
                        
                    // }
                    
                    let btns = document.querySelectorAll('.movie-chart');
                    btns.forEach((btn) => {
                        btn.addEventListener('click',function(event){
                            // if(btn.getAttribute('id') === 'arrow-right')  createMovieChartList(2);
                            // else if(btn.getAttribute('id') === 'arrow-left') createMovieChartList(1);           
                            (event.target.id === 'arrow-right') ? createMovieChartList(2) : createMovieChartList(1);
                        });
                    });
                })
                .catch( error => console.log('error'));
        })
        .catch( error => console.log('error'));
        
} //createMovieChartList

// kobisCommons.js 파일의 searchMoviePoster() 비동기식 함수를 순서대로 호출하는 getPoster 함수 생성
async function getPoster(movieNm,openDt){
    return await searchMoviePoster(movieNm,openDt);
}














