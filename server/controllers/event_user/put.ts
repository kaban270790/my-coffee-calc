import {ControllerActionPost} from "../../typings/ControllerAction";
import EventUserModel from "../../models/EventUser";
import UserModel from "../../models/User";

type RequestEventType = { tasks: number, cups: number, id: number };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (data: RequestEventType) => void, reject: (errors: FieldErrorsInterface) => void) => {

        const {cups, tasks} = req.body;
        let errors: FieldErrorsInterface = {};
        let hasError = false;
        if (!(cups > 0)) {
            errors.cups = 'Cups less than 0';
            hasError = true;
        }
        if (!(tasks > 0)) {
            errors.cups = 'Tasks less than 0';
            hasError = true;
        }
        if (hasError) {
            reject(errors);
        }
        resolve({tasks, cups, id: Number(req.params.id)});
    }).then((data) => {
        const {id} = data;
        return EventUserModel
            .find({where: {id}})
            .then((eventUser) => {
                if (!eventUser) {
                    throw new Error("Event user link not found");
                }
                return {...data, eventUser: eventUser};
            });
    }).then((data) => {
        const {eventUser} = data;
        return UserModel
            .find({where: {id: eventUser.user}})
            .then((user) => {
                if (!user) {
                    throw new Error("User not found");
                }
                return {...data, user}
            });
    }).then((data) => {
        const {user, eventUser, tasks, cups} = data;
        let paidTasks = tasks - (user.home + 5);
        switch (paidTasks) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                eventUser.paidTasks = paidTasks;
                break;
            default:
                eventUser.paidTasks = 0;
                break;
        }
        eventUser.tasks = tasks;
        eventUser.cups = cups;
        return eventUser;
    }).then((eventUser) => {
        return eventUser.save();
    }).then(() => {
        res.json({result: true});
    }).catch((errors: FieldErrorsInterface) => {
        res.json({result: false, errors});
    });
};
export default action;
