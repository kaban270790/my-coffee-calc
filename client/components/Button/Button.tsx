import React, {PropsWithChildren} from "react";
import ButtonUI, {ButtonProps} from "@material-ui/core/Button";

export default function Button(props: PropsWithChildren<ButtonProps>) {
    return <ButtonUI variant="contained" {...props}>{props.children}</ButtonUI>;
}
