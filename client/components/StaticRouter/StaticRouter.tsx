import React from "react";
import {StaticRouter as StaticRouterServer} from 'react-router-dom';

type ServerRouterType = {
    url: string
};

const StaticRouter = (props: React.PropsWithChildren<ServerRouterType>) => {
    return <StaticRouterServer location={props.url}>{props.children}</StaticRouterServer>;
};
export default StaticRouter;
