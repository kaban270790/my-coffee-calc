import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/types";
import Alert from "../Alert";
import {removeAlert} from "../../store/alert/actions";

export default function AlertList() {
    const alerts = useSelector((state: AppState) => {
        return state.alerts.list;
    });
    const [list, setList] = useState<JSX.Element[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const list: JSX.Element[] = [];
        for (let alertKey in alerts) {
            if (!alerts.hasOwnProperty(alertKey)) {
                continue;
            }
            const alert = alerts[alertKey];
            list.push(<Alert key={alertKey}
                             onCollapseClose={() => {
                                 dispatch(removeAlert(alertKey));
                             }}
                             alert={alert}/>);
        }
        setList(list);
    }, [alerts]);
    return <>
        {list}
    </>;
}
