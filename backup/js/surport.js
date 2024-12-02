window.addEventListener('DOMContentLoaded',function(){
    createNoticeList();
});



function createNoticeList(){
    fetch('./data/notice.json')
        .then((result) => result.json()) //fetch 실행결과 = result는 문자열 => json으로 변경작업 | 한줄{}생략, return 생략
        .then((jsonData) => {
            showNoticeList(jsonData.list);
        })
        .catch((error) => console.log(error) );
}//createNoticeList

// notice filter
function onChangeNoticeList(code){
    // 1. list 배열에서 code를 filter해서 새로운 배열로 반환.
    fetch('./data/notice.json')
        .then((result) => result.json())
        .then((jsonData) => {
            if(code === 'total'){
                showNoticeList(jsonData.list);
            }else{
                let filterList = jsonData.list.filter((object) => object.code === code );// 필터 결과를 새로운 배열로 생성.
                showNoticeList(filterList);
            }
        })
        .catch((error) => console.log(error) );
    // 2. 화면에 출력코드 생성
    // 3. 화면 출력

} //onChangeNoticeList

// 화면 출력 함수
function showNoticeList(list){
    let output = ``;
    list.forEach((list,index) =>{
        output += `
            <li><a href="">${index+1} ${list.type} ${list.title}</a><span>${list.date}</span></li>
        `;
    });
    document.querySelector('.news_area .data-list').innerHTML = output;
}