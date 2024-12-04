
import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';
import Menu from './components/Menu.jsx';


export default function App() {
  const imgList = [
    {"img" : "/images/people1.webp"},
    {"img" : "/images/people2.webp"},
    {"img" : "/images/people3.webp"}
  ];
  const avatarList = [
    {"img" : "/images/people1.webp" , "name" : "Smith"},
    {"img" : "/images/people2.webp" , "name" : "James"},
    {"img" : "/images/people3.webp" , "name" : "Jain"}
  ];
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

