import {ControllerActionPost} from "../../typings/ControllerAction";
import EventModel from '../../models/Event';

type RequestEventType = { id: number, diamonds: number, crystals: number };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (userData: RequestEventType) => void, reject: (errors: FieldErrorsInterface) => void) => {

        const {diamonds, crystals} = req.body;
        let errors: FieldErrorsInterface = {};
        let hasError = false;
        if (!(diamonds > 0)) {
            errors.diamonds = 'Diamonds less than 0';
            hasError = true;
        }
        if (!(crystals > 0)) {
            errors.crystals = 'Crystals less than 0';
            hasError = true;
        }
        if (hasError) {
            reject(errors);
        }
        resolve({id: Number(req.params.id), diamonds, crystals});
    }).then(({id, diamonds, crystals}) => {
        return EventModel
            .update({
                diamonds: diamonds,
                crystals: crystals
            }, {where: {id}})
            .then((user) => {
                res.json({result: true});
            });
    }).catch((errors: FieldErrorsInterface) => {
        res.json({result: false, errors});
    });
};
export default action;
