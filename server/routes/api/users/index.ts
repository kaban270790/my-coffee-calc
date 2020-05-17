import {Router} from "express";
import cgetAction from '../../../controllers/users/cget';
import getAction from '../../../controllers/users/get';
import postAction from '../../../controllers/users/post';

const router = Router();
router.get('/users/:id', getAction);
router.get('/users', cgetAction);
router.post('/users', postAction);
export default router;
