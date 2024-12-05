import Dwitter from './Dwitter.jsx';
import './Dwitter.css';
import DwitterList from './DwitterList.jsx';
import { useEffect, useState } from 'react';

export default function AppDwitter(){

    // react에서 newwokt 접속 진행 시 => useEffect() 리액트 Hooks 사용한다.
    // react hooks -- useEffect();
    // useEffect(callback함수, dependencies) : 맨 처음에 실행되는 함수

    // const [관리할 변수이름, 변수에 넣는 함수명] = useStatus();
    const [dwitters, setDwitters] = useState([]);
    
    

    useEffect(() => { // return 보다 먼저 실행됨. 선언되는 위치는 상관없다. !!!맨처음 한번만 호출하도록 상태 관리.!!!!
        fetch('/data/dwitters.json') // newwokt를 통해 접속 : http://localhost:3000/data/dwitters.json
            .then((result) => result.json())
            .then((jsonData) => 
                setDwitters(jsonData)
            )
            .catch(error => console.log('error'));
    }, []);

    // console.log(`dwitters => ${dwitters}`);

    return (
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Signup</li>
            </ul>
            {/* map을 통해 출력 */}
            <DwitterList list={dwitters} />
        </div>
    );
}