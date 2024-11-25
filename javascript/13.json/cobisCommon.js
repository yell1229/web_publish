// kobis 박스오피스 정보 호출 함수
export async function kobisBoxOffice(type, searchDt){
    const key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    
    console.log('url : ',url);
    
    let kobis = await fetch(url);
    let data = await kobis.json();
    
    return data;
}

// kobis 영화 리스트 호출 함수
export async function kobisMovieList(){
    let key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    const curPage = 1;
    const itemPerPage = 100;
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;
    let movieName = await fetch(url); // json 타입으로 가져오지만 문자열.
    let jsonData = await movieName.json(); // 문자열을 json으로 변경.
    
    return jsonData;

}

// kobis 영화 정보 상세 호출 함수
export async function kobisMovieDetail(movieCd){
    let key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    let movie = await fetch(url); // json 타입으로 가져오지만 문자열.
    let jsonData = await movie.json(); // 문자열을 json으로 변경.
    
    return jsonData;

}








