import React from "react";
import {BrowserRouter as BrowserRouteReact} from 'react-router-dom';
import {renderRoutes} from "react-router-config";
import routes from "../../routes";

type BrowserRouterType = {};

const BrowserRouter = (props: React.PropsWithChildren<BrowserRouterType>) => {
    return <BrowserRouteReact basename={'/'}>{props.children}</BrowserRouteReact>;
};
export default BrowserRouter;
