import '../css/Avatar.css';

// img="/images/people1.webp" object 리터럴로 넘어간다.
// props = {img : "/images/people1.webp"}
// props.img
//변수로 정의된 값은 {}
export default function AvatarImage({img}){ // 구조 분해 할당 : 넘어오는 값이 object라서{}감싼다. key값을 동일하게 쓴다.
    return(
        <img src={img} alt="" className="avatar-img" />
    );
}