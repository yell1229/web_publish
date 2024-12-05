
import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';
import Menu from './components/Menu.jsx';
import {useEffect, useState} from 'react';

export default function App() {
  const [imgList, setImgList] = useState([]);
  const [avatarList, setAvatarList] = useState([]);

    useEffect(() => {
      fetch('/data/avatar.json')
        .then((result) => result.json())
        .then(jsonData => { // return 은 바로 화면에 출력 할 때 사용. 그게 아닌 경우 쓰지 않아도 된다.
          setImgList(jsonData.imageList);
          setAvatarList(jsonData.avatarList);
        })
        .catch(error => console.log('error'))
    },[]);
  
console.log(`imgList => ${imgList}`);
console.log(`avatarList => ${avatarList}`);


  // const nav = [
  //   {"text" : ""},
  //   {"text" : ""},
  //   {"text" : ""},
  //   {"text" : ""},
  //   {"text" : ""},
  //   {"text" : ""},
  // ]
  return (
    <div className="App">
      <Menu name="Home" />
      <div className="App-container">
        <Avatar img="/images/people1.webp" name="Smith" />
        <Avatar img="/images/people2.webp" name="James" />
        <Avatar img="/images/people3.webp" name="Jain" />
      </div>
      <div className="App-container">
        <AvatarImage img="/images/people1.webp" />
        <AvatarImage img="/images/people2.webp" />
        <AvatarImage img="/images/people3.webp" />
      </div>
      <div className="App-container">
        <AvatarImageList list={imgList} />
      </div>
      <div className="App-container">
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}

