import React, {PropsWithChildren, ReactElement} from "react";
import {Provider} from "react-redux";
import store from "../../store";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../../store/router/reducers";

type ReduxProviderType = {};
export default function ReduxProvider(props: PropsWithChildren<ReduxProviderType>): ReactElement {
    return <Provider store={store}><ConnectedRouter history={history}>{props.children}</ConnectedRouter></Provider>
}
