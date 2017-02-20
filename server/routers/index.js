/**
 * Created by vlad on 9/25/2016.
 */
import express from 'express';
import authRouter from './auth.router';

const router = express.Router();
router.use(authRouter);

export default router;
