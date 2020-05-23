import {Router} from "express";
import postAction from '../../../controllers/events/post';
import putAction from '../../../controllers/events/put';

const router = Router();
// router.get('/users/:id', getAction);
// router.get('/users', cgetAction);
router.post('/events', postAction);
router.put('/events/:id', putAction);
// router.delete('/users/:id', deleteAction);
export default router;
