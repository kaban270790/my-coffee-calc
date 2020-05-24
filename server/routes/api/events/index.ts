import {Router} from "express";
import postAction from '../../../controllers/events/post';
import putAction from '../../../controllers/events/put';
import postCloseAction from '../../../controllers/events/postClose';
import getCalculateAction from '../../../controllers/events/getCalculate';

const router = Router();
router.post('/events', postAction);
router.put('/events/:id', putAction);
router.get('/events/:id/calculate', getCalculateAction);
router.post('/events/:id/close', postCloseAction);
export default router;
