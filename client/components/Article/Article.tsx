import React, {ReactElement} from "react";
import routes from "../../routes";
import {RouteConfig} from "react-router-config";
import {Route, Switch as SwitchReact} from "react-router-dom";
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
type SwitchPropsType = {
    routes: RouteConfig[]
};

function Switch({routes}: SwitchPropsType): ReactElement | null {
    console.log(routes);
    return routes.length > 0 ? <SwitchReact>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </SwitchReact> : null;
}

function RouteWithSubRoutes(route: RouteConfig) {
    console.log(route);
    const switchRoutes = <Switch routes={route.routes || []}/>;
    return (
        <Route
            path={route.path}
            render={props => (
                route.component === undefined ? switchRoutes : <>
                    <route.component {...props} />
                    {switchRoutes}
                </>
            )}
        />
    );
}

const Article = () => {
    return <Switch routes={routes}/>;
};
export default Article;
