import {useState, useEffect} from 'react';

export default function FooterContent(){
    const [companyInfo,setCompanyInfo] = useState({});
    useEffect(() => {
        fetch('/data/cgv_compinfo.json')
            .then( data => data.json() )
            .then( jsonData => setCompanyInfo(jsonData) )
            .catch(error => console.log('error'));
    },[]);

    return (
        <div className="inner">
            <div className="btm_q_nav">
                <ul>
                    { companyInfo.list && companyInfo.list.map( item => <li className={item.className}><a href={item.href}>{item.name}</a></li> )}
                </ul>      
            </div>
            <div className="company_info_wrap">
                
                <div className="company_info">
                    <address>{companyInfo.address}</address>
                    <dl>
                        <dt>대표이사</dt>
                        <dd>{companyInfo.ceo}</dd>
                    </dl>
                    <dl>
                        <dt>사업자등록번호</dt>
                        <dd>104-81-45690</dd>
                    </dl>
                    <dl>
                        <dt>통신판매업신고번호</dt>
                        <dd>2017-서울용산-0662 사업자정보확인</dd>
                    </dl>
                    <dl>
                        <dt>호스팅사업자</dt>
                        <dd>CJ올리브네트웍스</dd>
                    </dl>
                    <dl>
                        <dt>대표이메일</dt>
                        <dd>cjcgvmaster@cj.net</dd>
                    </dl>
                    <div className="copyright"><a href="admin.html">©</a> CJ CGV. All Rights Reserved</div>
                </div>
                <div className="familysite">
                    <select name="" id="">
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                        <option value="">familysite</option>
                    </select>
                    <span>GO</span>
                </div>
            </div>
        </div>
    );
}