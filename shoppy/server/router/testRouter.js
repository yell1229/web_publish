import express from 'express';
import * as controller from '../controller/testController.js';

const router = express.Router();

// router 정보를 매핑
router.get('/', controller.getTest); // /test/ === /
router.get('/product', controller.getTestProduct);


export default router;