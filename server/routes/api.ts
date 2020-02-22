import paidTasks from './api/paidTasks';
import {Express} from 'express';

export default function (server: Express): void {
    paidTasks(server);
}
