import express from 'express';
import * as controller from '../controller/imageUploadController.js';

const router = express.Router();

router.post('/new', controller.fileUpload);



export default router;