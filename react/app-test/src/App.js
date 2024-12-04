import logo from './logo.svg';

import ButtonList from './components/ButtonList.jsx';
import AvatarList from './components/AvatarList.jsx';
import NavList from './components/NavList.jsx';
import BoxList from './components/BoxList.jsx';

export default function App() {
  const list = [
    {"text" : "All" ,"type" :"button"},
    {"text" : "About" ,"type" :"button"},
    {"text" : "Skills" ,"type" :"button"},
    {"text" : "Testimonial" ,"type" :"button"},
    {"text" : "Contect" ,"type" :"button"}
  ];
  const imgs = [
    {"img" :"/images/people1.webp", "name":"asdf"},
    {"img" :"/images/people2.webp", "name":"ddd"},
    {"img" :"/images/people3.webp", "name":"hre"}
  ]
  const links = [
    {"link":"www.naver.com", "name" :"NAVER"},
    {"link":"www.google.com", "name" :"GOOGLE"},
    {"link":"www.facebook.com", "name" :"FACEBOOK"},
  ];
  const textImg = [
    {"img":"/images/people1.webp", "text" :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, laudantium eum expedita temporibus quae alias modi deserunt hic ab molestiae, culpa veniam aspernatur! Iste autem et voluptates culpa repellat sed? "},
    {"img":"/images/people2.webp", "text" :"Lorem ipsulpa veniam aspernatur! Iste autem et voluptates culpa repellat sed? "},
    {"img":"/images/people3.webp", "text" :"Lorem ipsum dolor, sit amet consspernatur! Iste autem et voluptates culpa repellat sed? "}
  ]
  return (
    <div className="App">
      <NavList link={links}/>
      <AvatarList img={imgs} />
      <ButtonList btnList={list} />
      <BoxList list={textImg} />
    </div>
  );
}
