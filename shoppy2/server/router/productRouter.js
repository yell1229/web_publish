import express from 'express';
import * as controller from '../controller/productController.js';

const router = express.Router();

router.post('/new',controller.getProduct);

export default router;