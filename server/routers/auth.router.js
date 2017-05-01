/**
 * Created by vlad on 2/20/2017.
 */
import express from 'express';
import {login, signup} from '../controllers/auth.controller';
import {hash} from '../middlewares/common';

const router = express.Router();

router.post('/login', login);
router.post('/signup', hash, signup);

export default router;
