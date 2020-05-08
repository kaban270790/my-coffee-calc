import React, {PropsWithChildren} from "react";
import GridUI, {GridProps} from "@material-ui/core/Grid";

export default function Grid(props: PropsWithChildren<GridProps>) {
    return <GridUI {...props}/>;
}
