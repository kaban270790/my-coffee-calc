import React from "react";
import routes from "../../routes";
import {RouteConfig} from "react-router-config";
import {Route, Switch} from "react-router-dom";
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: RouteConfig) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                route.component === undefined ? null : <route.component {...props} />
            )}
        />
    );
}

const Article = (props: React.PropsWithChildren<any>) => {
    return <Switch>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </Switch>;
};
export default Article;
