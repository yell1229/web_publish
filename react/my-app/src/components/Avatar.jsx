import './Avatar.css';


// props = {img" :"/images/people1.webp", "name":"Smith"}
// 하나의 파일 안에 default는 1개만 쓸 수 있고, 파일 이름과 동일한 함수만 가능.
/*
 function Avatar(props){
    // 이미지 주소
    return (
        <div className='avatar-container'>
            <img src={props.img} alt="" className="avatar" />
            <div>{props.name},{props.age}</div>
        </div>
    );
}
*/
export default function Avatar({img, name, age}){ // 구조 분해 할당
    // 이미지 주소
    return (
        <div className='avatar-container'>
            <img src={img} alt="" className="avatar" />
            <div>{name},{age}</div>
        </div>
    );
}

