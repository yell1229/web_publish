// KMDB API 호출
export async function kmdb(type, value, title){
    const serviceKey = `MO075W76WVQ09UK49059`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url +=`&${type}=${value}&title=${title}&ServiceKey=${serviceKey}`;
    console.log(url);
        
    let api = await fetch(url);
    let jsonData = await api.json(); //문자열을 json으로 변환

    return jsonData; // promise type으로 리턴됨.
}