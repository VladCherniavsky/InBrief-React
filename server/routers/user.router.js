/**
 * Created by Vlad on 4/30/2017.
 */
import express from 'express';
import {getAll} from '../controllers/user.controller';

const router = express.Router();

router.get('/users', getAll);

export default router;
