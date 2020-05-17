import React from "react";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import {dateFormat} from "../../utils/date";
import {ResidentInterface} from "../../typing/people";
import {Link} from "react-router-dom";
import {createPathResident} from "../../routes/root/people";

type ResidentPropsType = {
    resident: ResidentInterface
};

export default function Resident({resident}: ResidentPropsType) {

    return <ListItem typeof={'button'}>
        <ListItemText>{resident.id}</ListItemText>
        <ListItemText><Link to={createPathResident(resident.id)}>{resident.name}</Link></ListItemText>
        <ListItemText>{resident.house_level}</ListItemText>
        <ListItemText>{dateFormat(resident.added_ts)}</ListItemText>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <Delete/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>;
}
