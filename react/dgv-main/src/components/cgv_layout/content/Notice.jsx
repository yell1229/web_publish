
export default function Notice(){
    return (
        <div className="inner">
            <div className="notice_area">
                <div className="notice_box">
                    <div className="info_list">
                        <div className="top_noti">
                            <strong>공지사항</strong>
                            <div>[시스템 점검]iOS 18 업데이트 관련 예매 서비스 이용 안내</div>
                            <a href="">더보기</a>
                        </div>
                        <dl>
                            <dt>고객센터</dt>
                            <dd>
                                <strong>1544-1122</strong><br />
                                고객센터 운영시간 (평일 09:00~18:00)<br />
                                업무시간 외 자동응답 안내 가능합니다.
                            </dd>
                            
                        </dl>
                        <div class="btns">
                            <a href="">FAQ</a>
                            <a href="">1:1 문의</a>
                            <a href="">대관/단체 문의</a>
                        </div>
                    </div>
                    <div class="qr">
                        <div>
                            <strong>앱 다운로드</strong>CGV앱에서 더 편리하게 이용하세요
                        </div>
                        <img src="img/img_qrcode.gif" alt="" />
                        <span>
                            QR코드를 스캔하고<br />앱설치 페이지로 바로 이동하세요
                        </span>
                    </div>
                </div>
                <div class="ban_area" style={{backgroundColor:'#d9f7da'}}>
                    <a href=""><img src="img/226x259.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
}