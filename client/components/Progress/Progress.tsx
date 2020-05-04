import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

type ProgressPropsType = {
    progress: number
};
export default function Progress(props: ProgressPropsType) {
    return <CircularProgress variant={"determinate"} value={props.progress}/>
}
