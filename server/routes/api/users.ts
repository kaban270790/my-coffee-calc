import paidTasks from '../../paidTasks.json';
import {Express, Request, Response} from "express";
import User from "../../models/User";

export default function (server: Express): void {
    server.get('/api/users', (req: Request, res: Response) => {

        const newUser = User.create({
            user_name: 'Johnny',
            home: 0,
            added_ts: new Date()
        });
        console.log(newUser.toJSON());

        res.json(newUser.toJSON());
    });
}
