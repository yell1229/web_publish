initForm();

function initForm(){
    let output =`
        <h1>KOBIS 영화검색</h1>
        <input type="text" id="searchMovie" placeholder="영화이름을 입력하세요">
        <button>Search</button>
        <div class="result"></div>
    `;
    document.querySelector('body').innerHTML = output;
    //버튼 이벤트
    document.querySelector('button').addEventListener('click',function(){
        let searchMovie = document.querySelector('#searchMovie');
        if(searchMovie.value === ''){
            alert('영화를 입력해주세요');
            searchMovie.focus();
        }else{
            // 입력된 영화를 검색하는 함수 호출
            kobisMovieDetail(searchMovie.value);
        }
    });
}

// kobis 영화 리스트 호출 함수
async function movieList(searchMovie){
    let key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`;
    let movie = await fetch(url);
    let json = await movie.json();
    console.log(url);
    let movieList = json.movieListResult.movieList;
    let matchingCd = '';
    movieList.forEach((movie) => {
        console.log(movie.movieNm);
        if(movie.movieNm === searchMovie){
            matchingCd = movie.movieCd
            console.log('check',matchingCd);
            
        }
    });
    console.log(`matching :  ${matchingCd}`);
    return matchingCd;
}

// kobis 영화 정보 상세 호출 함수
async function kobisMovieDetail(searchMovie){
    let movieMatchingCd = movieList(searchMovie);
    console.log('num',movieMatchingCd);
    
    let key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieMatchingCd}`; 
    let movie = await fetch(url);
    let json = await movie.json();
    console.log(`영화 정보 상세: ${url}`);
}