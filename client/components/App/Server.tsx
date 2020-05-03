import React, {PropsWithChildren, ReactElement} from "react";
import App from "./App";
import StaticRouter from "../StaticRouter";

type AppServerPropsType = {
    url: string
}
const AppServer = (props: PropsWithChildren<AppServerPropsType>): ReactElement => {
    return (
        <StaticRouter url={props.url}>
            <App/>
        </StaticRouter>
    );
};

export default AppServer;
