import paidTasks from './api/paidTasks';
import users from './api/users';
import {Express} from 'express';

export default function (server: Express): void {
    paidTasks(server);
    users(server);
}
