import React,{useState, useRef} from 'react';
import {validateForm} from '../../apis/validate.js';

export default function UserInfo() {
    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    //폼데이터 저장소: 값이 바뀔때마다 바로바로 저장

    // const nameRef = useRef(null);
    // const addressRef = useRef(null);
    // const ageRef = useRef(null);
    const refs = {
        nameRef:useRef(null),
        addressRef:useRef(null),
        ageRef:useRef(null)
    }

    const init = {"name" :"","address" :"", "age":""};
    const [form, setForm] = useState(init); // 값이 바뀌면 바로바로 return 한다.

    const getForm = (event) => {
        const {name, value} = event.target; // 객체가 넘어온다.
        setForm({...form,[name]:value}); // 기존의 값을 유지하기 위해서, 스프레드 연산자 사용 ...form, 새로운 값 키값을 변수로 입력할 때 []로 감싸준다.
        
    }
    // console.log(form.name);
    // console.log(form.address);

// const validateForm = () => {
//     if(nameRef.current.value === ''){
//         alert('name를 입력해주세요.');
//         nameRef.current.focus();
//         return false;
//     }else if(addressRef.current.value === ''){
//         alert('address를 입력해주세요.');
//         addressRef.current.focus();
//         return false;
//     }else if(ageRef.current.value === ''){
//         alert('age를 입력해주세요.');
//         ageRef.current.focus();
//         return false;
//     }else{
//         return true;
//     }
    
// }

    const handleSubmit = (e) => {
        // const param = {
        //     "nameRef":nameRef,
        //     "addressRef":addressRef,
        //     "ageRef":ageRef
        // }
        e.preventDefault();
        if(validateForm(refs)){
            console.log(form);
        }
        
    }

    return (
        <div>
            <h1>UserInfo</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>name</label>
                        <input type="text" name="name" value={form.name} ref={refs.nameRef} onChange={getForm} />
                    </li>
                    <li>
                        <label>Address</label>
                        <input type="text" name="address" value={form.address} ref={refs.addressRef} onChange={getForm} />
                    </li>
                    <li>
                        <label>age</label>
                        <input type="text" name="age" value={form.age} ref={refs.ageRef} onChange={getForm} />
                    </li>
                    <li>
                        <button type="submit">Send</button>
                    </li>
                </ul>

            </form>
        </div>
    );
}

