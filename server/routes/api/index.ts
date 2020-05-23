import {json, Router} from "express";
import users from './users';
import paidTasks from './paidTasks';
import events from "./events";

const router = Router();
router.use(json());
router.use('/api/v1', [users, events, paidTasks]);
export default router;
