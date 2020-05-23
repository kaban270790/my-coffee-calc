import {json, Router} from "express";
import users from './users';
import paidTasks from './paidTasks';
import events from "./events";
import event_user from "./event_user";

const router = Router();
router.use(json());
router.use('/api/v1', [users, events, event_user, paidTasks]);
export default router;
