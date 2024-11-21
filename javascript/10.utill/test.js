// 3. 사원의 id를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 조합하여 사번을 생성한다.
// 사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 출력
function createEmployeeNumber(array){
    let newArray = new Set(array); // 중복 제거됨. 객체형태로 반환. 
    // console.log(Array.isArray(newArray)); //false
    // let newObj = {};
    // Array.from(newArray).map((id) =>
    //     // 번호생성
    //     newObj[id] =  id.concat('_',Math.floor(Math.random()*1000000))
    //     );
    
    // return newObj;
    

    let arr = Array.from(newArray);// []로 변경
    // return arr.map((el) =>
    //     el = el.concat('_',Math.floor(Math.random()* 1000000))
    // );
    arr.forEach((el, index) => {
        return arr[index] = el.concat('_',Math.floor(Math.random()* 1000000)) ;
        //console.log(arr[index]);
    }); //undefined
    return arr;
    // let index = 0;
    // for(let el of arr){
    //     arr[index] = el.concat('_',Math.floor(Math.random()* 1000000));
    //     index++;
    // }
    // return arr;
}




const employeeIds = ['hong','test','asdf','test1234','hong','test'];
let newObj = createEmployeeNumber(employeeIds)

console.log(newObj);










