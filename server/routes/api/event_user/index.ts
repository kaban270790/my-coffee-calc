import {Router} from "express";
import putAction from '../../../controllers/event_user/put';

const router = Router();
router.put('/event_user/:id', putAction);
export default router;
