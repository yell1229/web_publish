import express from 'express';
import * as controller from '../controller/paymentsController.js';

const router = express.Router();

router.post('/qr', controller.paymentKakaopay);

export default router;