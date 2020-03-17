import {Router} from "express";
import users from './users';
import paidTasks from './paidTasks';

const router = Router();
router.use('/api/v1', [users, paidTasks]);
export default router;
