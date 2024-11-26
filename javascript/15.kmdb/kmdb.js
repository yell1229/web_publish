import {kmdb} from './commons.js'

initForm();

function initForm(){
    let output=`
        <h1>KMDB API</h1>
        <div>
            <select id="type">
                <option value="default">선택</option>
                <option value="derector">영화감독</option>
                <option value="actor">영화배우</option>
            </select>
            <input type="text" id="type_value" placeholder="영화감독/영화배우 입력">
            <input type="text" id="title" placeholder="영화제목을 입력해주세요.">
            <button type="button">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector('body').innerHTML = output;

    // result button event
    document.querySelector('button').addEventListener('click',function(){
        let type = document.querySelector('#type');
        let typeValue = document.querySelector('#type_value');
        let title = document.querySelector('#title');
        // validation check
        if(type.value === 'default'){
            alert('영화감독,영화배우를 선택해주세요.');
            type.focus();
        }else if(typeValue.value === ''){
            alert('영화감독/영화배우 입력해주세요.');
            typeValue.focus();
        }else if(title.value === ''){
            alert('영화제목을 입력해주세요');
            title.focus();
        }else{
            searchMovieResult(type.value, typeValue.value, title.value);
        }
    });

}// initForm

async function searchMovieResult(type, value, title){
    kmdb(type, value, title)
        .then((result) => {
            let count = result.TotalCount;
            let output = ``;
            let actorFive = [];
            let actorAll = [];

            if(count){ // 1: treu , 0: false
                let info = result.Data[0].Result[0];
                let directors = result.Data[0].Result[0].directors.director;
                let actors = result.Data[0].Result[0].actors.actor;
                let posterArr = result.Data[0].Result[0].posters.split('|'); //문자열. 메모리에 값을 가지고 있기 때문에.
                let stllsArr = result.Data[0].Result[0].stlls.split('|');
                let staffsArr = result.Data[0].Result[0].staffs.staff;
                let title = info.title.replaceAll('!HS','').replaceAll('!HE','');
                
                actors.forEach((actor,i) =>{
                    if(i <5) actorFive.push(actor.actorNm);
                });
                actors.forEach((actor,i) =>{
                    actorAll.push(actor.actorNm);
                });
                output += `
                <div class="container">
                    <div class="container-img"><img src="${posterArr[0]}" alt=""></div>
                    <div class="container-content">
                        <h3>${title}</h3>
                        <h5>${info.titleEng} ㆍ ${info.prodYear} 년</h5>
                    
                        <p>
                            ${info.type} ㆍ ${info.rating} ㆍ ${info.nation} ㆍ ${info.runtime}분 ${info.repRlsDate.replace(3,0,'-')}(개봉)
                        </p>
                        <p><span>제작사</span><span>${info.company}</span></p>      
                        <p><span>감독</span><span>${staffsArr[0].staffNm}</span></p>      
                        <p><span>출연</span> 
                            <span id="actors">${actorFive.join()}</span>
                            <button type="button" id="more_actors">더보기</button>
                            <button type="button" id="close_actors" style="display:none;">접기</button></p>      
                    </div>
                    </div>
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                `;
                stllsArr.forEach((stll) => {
                    output += `
                    <div class="swiper-slide"><img src="${stll}"></div>
                    `;
                });
                output += `   
                    </div></div>
                `;
                document.querySelector('#result').innerHTML = output;
                
                
                
            }else{
                output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`;
            }
            document.querySelector('#result').innerHTML = output;

            // 더보기 버튼 이벤트
            document.querySelector('#more_actors').addEventListener('click',() => {    
                document.querySelector('#actors').textContent = actorAll.join();
                document.querySelector('#more_actors').style.display = 'none';
                document.querySelector('#close_actors').style.display = 'inline-block';
            });
            // 접기 버튼
            document.querySelector('#close_actors').addEventListener('click',() => {
                document.querySelector('#actors').textContent = actorFive.join();
                document.querySelector('#close_actors').style.display = 'none';
                document.querySelector('#more_actors').style.display = 'inline-block';
            });
        })
        .catch((error) => console.log(error) );
} // searchMovieResult
