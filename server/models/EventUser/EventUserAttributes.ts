import {PaidTasksType} from "./types";

export default interface EventUserAttributes {
    id?: number;
    user: number;
    event: number;
    tasks: number | null;
    paidTasks: PaidTasksType | null;
    cups: number | null;
    diamonds: number | null;
    crystals: number | null;
}
