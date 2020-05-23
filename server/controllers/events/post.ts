import {ControllerActionPost} from "../../typings/ControllerAction";
import EventModel from '../../models/Event';

type RequestEventType = { date_start: Date, date_end: Date };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (userData: RequestEventType) => void, reject: (errors: FieldErrorsInterface) => void) => {

        const {date_start, date_end} = req.body;
        let errors: FieldErrorsInterface = {};
        let hasError = false;
        if (!date_start) {
            errors.date_start = 'Date start empty';
            hasError = true;
        }
        if (!date_end) {
            errors.date_end = 'Date end empty';
            hasError = true;
        }
        if (hasError) {
            reject(errors);
        }
        resolve({date_start: new Date(date_start), date_end: new Date(date_end)});
    }).then((userData) => {
        return EventModel
            .create({
                date_start: userData.date_start,
                date_end: userData.date_end,
                diamonds: null,
                crystals: null
            })
            .then((user) => {
                res.json({result: !!user.id});
            });
    }).catch((errors: FieldErrorsInterface) => {
        res.json({result: false, errors});
    });
};
export default action;
