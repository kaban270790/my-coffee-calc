import {ControllerActionPost} from "../../typings/ControllerAction";
import EventUserModel from "../../models/EventUser";
import EventModel from "../../models/Event";
import EventInstance from "../../models/Event/EventInstance";
import {getCompensationDiamonds} from "../../../utils";

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const calcPrize = (cupsTotal: number, cups: number, prize: number) => {
    if (cups <= 0) {
        return 0;
    }
    if (prize <= 0) {
        return 0;
    }
    return Math.floor((cups / cupsTotal) * prize);
};

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
        return EventUserModel
            .findAll({where: {event: event.id}})
            .then((eventUsers) => {
                return {eventUsers, event};
            });
    }).then((data) => {
        const cupsTotal = data.eventUsers.reduce((cups, eventUser) => {
            cups += eventUser.cups || 0;
            return cups
        }, 0);
        return {...data, cupsTotal};
    }).then(({cupsTotal, eventUsers, event}) => {
        const diamonds = eventUsers.reduce((diamonds, eventUser) => {
            const paidTasks = eventUser.paidTasks || 0;
            if (paidTasks < 0 || paidTasks > 10) {
                throw new Error("Bad count paid tasks");
            }
            return diamonds - (getCompensationDiamonds(paidTasks));
        }, event.diamonds || 0);
        return {eventUsers, cupsTotal, diamonds, crystals: event.crystals || 0};
    }).then(({cupsTotal, eventUsers, diamonds, crystals}) => {
        eventUsers.forEach((eventUser) => {
            eventUser.diamonds = calcPrize(cupsTotal, eventUser.cups || 0, diamonds);
            eventUser.crystals = calcPrize(cupsTotal, eventUser.cups || 0, crystals);
        });
        return eventUsers;
    }).then(async (eventUser) => {
        await eventUser.forEach((eventUser) => eventUser.save());
        res.statusCode = 205;
        res.send();
    }).catch((errors: FieldErrorsInterface) => {
        res.statusCode = 500;
        res.json({result: false, errors});
    });
};
export default action;
