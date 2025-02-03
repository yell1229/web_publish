import express from 'express';
import * as controller from '../controller/empController.js';

const router = express.Router();

router.get('/',controller.getEmp);

export default router;