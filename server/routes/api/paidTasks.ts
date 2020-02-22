import paidTasks from '../../paidTasks.json';
import {Express, Request, Response} from "express";

export default function (server: Express): void {
    server.get('/api/paidTasks', (req: Request, res: Response) => {
        res.json(paidTasks);
    });
}
