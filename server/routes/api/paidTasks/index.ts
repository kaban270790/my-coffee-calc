import paidTasks from '../../../paidTasks.json';
import {Request, Response, Router} from "express";

const router = Router();
router.get('/paidTasks', (req: Request, res: Response) => {
    res.json(paidTasks);
});
export default router;
