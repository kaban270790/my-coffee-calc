import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";

const action: ControllerActionPost = (req, res) => {
    User.findAll().then((list) => {
        console.log(list);
        res.json(list);
    });
};
export default action;
