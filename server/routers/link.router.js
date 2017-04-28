/**
 * Created by Vlad on 4/22/2017.
 */
import express from 'express';
import {add} from '../controllers/link';

const router = express.Router();

router.post('/link', add);

export default router;
