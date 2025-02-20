import axios from "axios";
//카카오페이 QR결제 함수
export const paymentKakaopay = async (req, res) =>{
    
    try {
        console.log('카카오페이 QR결제 함수--->>',req.body);
        const {id, item_name, total_amount} = req.body;
        const KAKAO_ADMIN_KEY = "8ccc326bd3020a9c8d60b26794991220";
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // 주문번호 생성

        const response = await axios.post(
            "https://kapi.kakao.com/v1/payment/ready",
            {
                cid: "TC0ONETIME", // 테스트용 CID : TC0ONETIME
                partner_order_id: `order_${uniqueSuffix}`,
                partner_user_id: id,
                item_name,
                quantity: 1,
                total_amount,
                tax_free_amount: 0,
                approval_url: "http://localhost:3000/payment/success",
                cancel_url: "http://localhost:3000/payment/cancel",
                fail_url: "http://localhost:3000/payment/fail",
            },
            {
                headers: {
                    Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
                    "Content-Type": "application/x-www-form-urlencoded",
            },
            }
        );
        console.log('qr-->', response.data);
        
        res.json(response.data);
    } catch (error) {
    console.error("QR 결제 요청 실패:", error);
    res.status(500).json(error.response.data);
    }
}