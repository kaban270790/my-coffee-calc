import React from "react";

type AlertPropsType = {
    message: string
};

export default function Alert(props: AlertPropsType) {
    return <div>{props.message}</div>;
}
