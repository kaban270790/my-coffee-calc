import CloseIcon from "@material-ui/icons/Close";
import {IconButton} from "@material-ui/core";
import React from "react";

type ButtonCloseProps = {
    cbClose: () => void
};
export default function ButtonClose({cbClose}: ButtonCloseProps) {
    return <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={cbClose}
    >
        <CloseIcon fontSize="inherit"/>
    </IconButton>;
}
