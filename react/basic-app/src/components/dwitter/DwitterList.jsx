import Dwitter from "./Dwitter.jsx";

export default function DwitterList({list}){
    return(
        <>
            {
                list.map((item) => <Dwitter img={item.img} id={item.id} name={item.name} date={item.date} content={item.content} /> )
            }
        </>
    );
}