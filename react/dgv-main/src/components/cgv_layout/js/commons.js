//  비동기식 네크워크 연동 실행 함수
export async function fetchJSON(url){
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData;
}