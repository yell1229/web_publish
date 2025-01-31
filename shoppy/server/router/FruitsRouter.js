import express from 'express';
import * as controller from '../controller/fruitsController.js';

const router = express.Router();

router.get('/',controller.getFruits);
router.get('/apple',controller.getFruitApple);

export default router;