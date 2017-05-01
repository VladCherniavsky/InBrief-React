/**
 * Created by Vlad on 4/30/2017.
 */
import express from 'express';
import {add} from '../controllers/link.controller';

const router = express.Router();

router.post('/link', add);

export default router;
