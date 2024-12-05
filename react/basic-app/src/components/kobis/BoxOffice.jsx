import './Boxoffice.css';

export default function BoxOffice({rank, title,openDt, cnt, total, sale ,type}){
    if(type === 'content'){
        cnt = parseInt(cnt).toLocaleString().concat('명');
        total = parseInt(total).toLocaleString().concat('명');
        sale = parseInt(sale).toLocaleString().concat('명');
    }

    return (
        <>
            <div className="flex">
                <p style={{width:50}}>{rank}</p>
                <p style={{width:300}}>{title}</p>
                <p style={{width:100}}>{openDt}</p>
                <p style={{width:150}}>{cnt}</p>
                <p style={{width:150}}>{total}</p>
                <p style={{width:250}}>{sale}</p>
            </div>
        </>
    );
}