import reducerStore from './reducer';
import {PageTitleTypes} from "./pageTitle/types";

export type AppState = ReturnType<typeof reducerStore>;

export type AppTypes = PageTitleTypes;
