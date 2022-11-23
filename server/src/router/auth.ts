import express from 'express';
import * as AuthController from '../controller/auth';

const router = express.Router();

router.post('/signin', AuthController.signin);

router.post('/signup', AuthController.signup);

router.get('/me', AuthController.me);

export default router;
