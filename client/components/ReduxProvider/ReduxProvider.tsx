import React, {PropsWithChildren, ReactElement} from "react";
import {Provider} from "react-redux";
import store from "../../store";

type ReduxProviderType = {};
export default function ReduxProvider(props: PropsWithChildren<ReduxProviderType>): ReactElement {
    return <Provider store={store}>{props.children}</Provider>
}
