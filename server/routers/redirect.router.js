/**
 * Created by User on 5/2/2017.
 */
import express from 'express';
import {redirect} from '../controllers/link.controller';

const router = express.Router();

router.get('/:shortLink', redirect);

export default router;
