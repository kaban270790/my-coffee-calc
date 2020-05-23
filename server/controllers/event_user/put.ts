import {ControllerActionPost} from "../../typings/ControllerAction";
import EventUserModel from "../../models/EventUser";

type RequestEventType = { cups: number, id: number };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (data: RequestEventType) => void, reject: (errors: FieldErrorsInterface) => void) => {

        const {cups} = req.body;
        let errors: FieldErrorsInterface = {};
        let hasError = false;
        if (!(cups > 0)) {
            errors.cups = 'Cups less than 0';
            hasError = true;
        }
        if (hasError) {
            reject(errors);
        }
        resolve({cups, id: Number(req.params.id)});
    }).then(({cups, id}) => {
        return EventUserModel
            .update({
                cups: cups,
            }, {where: {id}});
    }).then((user) => {
        res.json({result: true});
    }).catch((errors: FieldErrorsInterface) => {
        res.json({result: false, errors});
    });
};
export default action;
