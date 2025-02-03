import express from 'express';
import * as controller from '../controller/mainController.js';

// 변수인 상태에서는 export default 적용 안됨.
const router = express.Router();

//
// router.get('/', 컨트롤러 함수명);
router.get('/', controller.getMain);

export default router;