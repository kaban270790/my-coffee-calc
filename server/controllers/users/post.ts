import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";

const action: ControllerActionPost = (req, res) => {
    User.create({
        user_name: 'Johnny',
        home: 0,
        added_ts: new Date(),
        deleted_ts: null
    }).then((user) => {
        res.json({result: !!user.id});
    });
};
export default action;
