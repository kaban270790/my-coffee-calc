import {ControllerActionPost} from "../../typings/ControllerAction";
import UserModel from "../../models/User";
import EventUserModel from "../../models/EventUser";
import EventModel from "../../models/Event";
import EventInstance from "../../models/Event/EventInstance";

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (event: EventInstance) => void, reject: (errors: FieldErrorsInterface) => void) => {
        const id = Number(req.params.id);
        EventModel
            .find({where: {id}})
            .then((event) => {
                if (event === null) {
                    throw new Error("Event not found");
                }
                resolve(event);
            })
            .catch((err) => {
                reject({main: err})
            });
    }).then((event: EventInstance) => {
        return UserModel
            .findAll({where: {deleted_ts: null}})
            .then((users) => {
                if (users.length === 0) {
                    res.statusCode = 205;
                    res.send();
                }
                return {event, users};
            });
    }).then(({event, users}) => {
        return EventUserModel.bulkCreate(users.map((user) => (
            {
                user: Number(user.id),
                event: Number(event.id),
                cups: null,
                diamonds: null,
                crystals: null
            }
        )));
    }).then(async (eventUsers) => {
        await eventUsers.map((eventUser) => {
            eventUser.save();
        });
        res.statusCode = 205;
        res.send();
    }).catch((errors: FieldErrorsInterface) => {
        res.statusCode = 500;
        res.json({result: false, errors});
    });
};
export default action;
