
export default function AribnbComponent(props){

    // console.log('₩'.concat(parseInt(props.price).toLocaleString()));
    let wonPrice = '₩'.concat(parseInt(props.price).toLocaleString());

    return (
        <div className="box">
            <div className="img">
                <img src={props.src} alt="" />
                { props.isGood && <span className="isgood">게스트 선호</span> }
                <span className="isheart" style={{color: props.color && 'coral'}}>❤</span>
            </div>
            <div className="info">
                <div>{props.nation}</div>
                <div>{props.info}</div>
                <div>{props.date}</div>
                <div><strong>{wonPrice}</strong>  /박</div>
            </div>
        </div>
    );
}