// kobis 박스오피스 정보 호출 함수
export async function kobisBoxOffice(type, searchDt){
    const key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    
    console.log('url : ',url);
    
    let kobis = await fetch(url);
    let data = await kobis.json();
    
    return data;
}