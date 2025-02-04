import express from 'express';
import * as controller from '../controller/memberController.js';

const router = express.Router();

// signup.jsx에서 post로 보냄
router
    .post('/signup', controller.registerMember) // 메소드 체이닝 사용가능
    .post('/idcheck',controller.getIdCheck);

export default router;