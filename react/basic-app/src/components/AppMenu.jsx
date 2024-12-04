import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';

export default function AppMenu(){
    const nameList =[
        {"name" : "Home" , "href" : "#home" , "bg" : "gray", "color": "White"},
        {"name" : "About" , "href" : "#ablut" , "bg" : "tomato"},
        {"name" : "Skills" , "href" : "#skills" , "bg" : "orange"},
        {"name" : "My work" , "href" : "#mywork"  , "bg" : "pink"},
        {"name" : "Testimonial" , "href" : "#testimonial" , "bg" : "lightgreen"},
        {"name" : "Contact" , "href" : "#contact" , "bg" : "blue"}
        ];
    return (
        <>
            <div>
                <Menu name="Home" href="#home" bg="gray" color="white" />
                <Menu name="About" href="#ablut" bg="tomato" />
                <Menu name="Skills" href="#skills" bg="tomato"  />
                <Menu name="My work" href="#mywork" bg="tomato"  />
                <Menu name="Testimonial" href="#testimonial" bg="tomato" />
                <Menu name="Contact" href="#contact" bg="tomato"  />
            </div>
            <div>
                <MenuList list={nameList} />
            </div>
        </>
        
    );
}