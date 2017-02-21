/**
 * Created by vlad on 2/20/2017.
 */
import express from 'express';
import {login, signup} from '../controllers/auth';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

export default router;
