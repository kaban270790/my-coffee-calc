import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";
import {HOUSE_LEVELS, HouseType} from "../../models/User/types";

type RequestUserType = { name: string, house_level: HouseType };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (userData: RequestUserType) => void, reject: (errors: FieldErrorsInterface) => void) => {

        const name = req.body.name;
        const house_level: HouseType = req.body.house_level;
        let errors: FieldErrorsInterface = {};
        const hasError = false;
        if (name.length === 0) {
            errors.name = 'The name cannot be empty';
        } else if (name.length < 2) {
            errors.name = 'The name cannot be shorter than 2 characters';
        }
        if (!HOUSE_LEVELS.find(el => el === house_level)) {
            errors.house_level = 'The name cannot be shorter than 2 characters';
        }
        if (hasError) {
            resolve({name, house_level});
        }
        reject(errors);
    }).then((userData) => {
        return User.create({
            user_name: userData.name,
            home: userData.house_level,
            added_ts: new Date(),
            deleted_ts: null
        }).then((user) => {
            res.json({result: !!user.id});
        });
    }).catch((errors: []) => {
        res.json({result: false, errors});
    });
};
export default action;
