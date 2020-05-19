import {Router} from "express";
import cgetAction from '../../../controllers/users/cget';
import getAction from '../../../controllers/users/get';
import postAction from '../../../controllers/users/post';
import deleteAction from '../../../controllers/users/delete';

const router = Router();
router.get('/users/:id', getAction);
router.get('/users', cgetAction);
router.post('/users', postAction);
router.delete('/users/:id', deleteAction);
export default router;
