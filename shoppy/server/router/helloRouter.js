import express from 'express';
import * as controller from '../controller/helloController.js';

const router = express.Router();

router.get('/', controller.getHello);

router.get('/test',controller.getHelloTest);

export default router;