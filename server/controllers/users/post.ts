import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";
import {HOUSE_LEVELS, HouseType} from "../../models/User/types";

type RequestUserType = { id?: number, name: string, house_level: HouseType };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    new Promise((resolve: (userData: RequestUserType) => void, reject: (errors: FieldErrorsInterface) => void) => {

        const body = req.body;
        const name = body.name;
        const house_level: HouseType = body.house_level;
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
            reject(errors);
        }
        resolve({id: body.id ?? undefined, name, house_level});
    }).then((userData) => {
        if (userData.id) {
            return User.update({
                user_name: userData.name,
                home: userData.house_level,
            }, {where: {id: userData.id}})
                .then((user) => {
                    res.json({result: true});
                });
        }
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
