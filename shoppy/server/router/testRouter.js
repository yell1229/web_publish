import express from 'express';
import * as controller from '../controller/testController.js';

const router = express.Router();

router.get('/',controller.getTest);

export default router;