import PackageContent from "./PackageContent.jsx";
import {useState, useEffect} from 'react';

export default function Package(){
    const [plist, setPlist] = useState([]);

    useEffect(()=> {
        fetch('/data/cgv_content.json')
            .then(data=> data.json())
            .then(jsonData => setPlist(jsonData.packageList) )
            .catch(error=>console.log('error'));
    },[]);
    return (
        <div className="inner">
            <div className="gift_area">
                {
                    plist && plist.map(item => <PackageContent title={item.title} link={item.link} linktext={item.linktext} list={item.list} /> )
                }
                
                {/*
                <PackageContent title="패키지" link="#" linktext="패키지 더보기" list={null} />
                <PackageContent title="영화관람권" link="#" linktext="영화관람권 더보기" list={null} />
                <PackageContent title="기프트카드" link="#" linktext="기프트카드 더보기" list={null} /> 
                */}
            </div>
        </div>
    );
}