import React from "react";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import {dateFormat} from "../../utils/date";
import {ResidentInterface} from "../../typing/people";

type ResidentPropsType = {
    resident: ResidentInterface
};

export default function Resident({resident}: ResidentPropsType) {

    return <ListItem typeof={'button'}>
        <ListItemText>{resident.id}</ListItemText>
        <ListItemText>{resident.name}</ListItemText>
        <ListItemText>{resident.house_level}</ListItemText>
        <ListItemText>{dateFormat(resident.added_ts)}</ListItemText>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <Delete/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>;
}
