/**
 * Created by Vlad on 4/22/2017.
 */
import express from 'express';
import {
    add,
    redirect,
    getAll
} from '../controllers/link.controller';

const router = express.Router();

router.post('/link', add);
router.get('/link', getAll);
router.get('/link/:shortLink', redirect);

export default router;
