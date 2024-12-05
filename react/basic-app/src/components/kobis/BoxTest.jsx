
export default function BoxTest(props){
    let audiCnt = parseInt(props.audiCnt).toLocaleString().concat('명');
    let audiAcc = parseInt(props.audiAcc).toLocaleString().concat('명');
    return (
        <>
            <tr>
                <td>{props.rank}</td>
                <td>{props.movieNm}</td>
                <td>{props.open}</td>
                <td>{audiCnt}</td>
                <td>{audiAcc}</td>
            </tr>
        </>
    );
}