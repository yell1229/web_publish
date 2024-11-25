import {kobisMovieList, kobisMovieDetail} from './cobisCommon.js';

let mList = null; // 영화리스트 전역변수
initForm();

// 영화리스트 100개 준비
function createMovieList(){
    kobisMovieList()
        .then((list) => {
            const tcount = list.movieListResult.totCnt;
            const movieList = list.movieListResult.movieList;
            console.log(movieList.length); 
            mList = movieList; // 전역변수로 변경.
            // for(let movie of mList) console.log(movie.movieNm);
            
        })
        .catch((error) => console.log('error'));
}

function initForm(){
    // kobis 영화리스트 가져오기
    createMovieList();
    let output = `
        <h1>KOBIS 영화검색</h1>
        <div id="search">
            <input type="text" id="search_title" placeholder="영화이름">
            <button type="button" id="search_button">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector('body').innerHTML = output;

    let searchTitle = document.querySelector('#search_title');
    let button = document.querySelector('#search_button');
    button.addEventListener('click',function(){
        if(searchTitle.value.trim() === ''){
            alert('영화이름을 입력해주세요.');
            searchTitle.focus();
        }else{
            // 영화리스트 출력함수 호출
            searchMovieList(searchTitle.value.trim());
        }
    });
}// initForm


// 영화 코드 검색 함수
function searchMovieCd(title){
    let movieCd = '';
    if(mList !== null){
        let filterMovie = mList.filter((movie) => movie.movieNm === title );
        // console.log(`title => ${filterMovie[0].movieNm}`);
        // console.log(filterMovie[0].movieCd);    
        movieCd = filterMovie[0].movieCd;
    }else{
        console.log(`영화 데이터 null`);    
    }
    return movieCd;
}

// 영화 상세 검색 함수
function searchMovieList(title){
    let movieCd = searchMovieCd(title);
    console.log(`code => ${movieCd}`);
    
    kobisMovieDetail(movieCd)
        .then((result) => {
            let info = result.movieInfoResult.movieInfo;
            let output = `
                <ul>
                    <li>
                        <label>movieCd : </label>
                        <span>${info.movieCd}</span>
                    </li>
                    <li>
                        <label>movieNm : </label>
                        <span>${info.movieNm}</span>
                    </li>
                    <li>
                        <label>movieNmEn : </label>
                        <span>${info.movieNmEn}</span>
                    </li>
                    <li>
                        <label>directors : </label>
                `;
                info.directors.forEach((el) => {
                    output += `
                        <span>${el.peopleNm}</span>
                        <span>${el.peopleNmEn}</span>
                        `;
                });
                output += `
                    <li>
                        <label>actors : </label>
                `;
                info.actors.forEach((actor) => {
                    output += `
                        <span>${actor.peopleNm ,  actor.peopleNmEn}</span>
                    `;
                });

                output += `
                    </li>
                </ul>
            `;
            document.querySelector('#result').innerHTML = output;
        })
        .catch((error) => {console.log(error);
        });
}
