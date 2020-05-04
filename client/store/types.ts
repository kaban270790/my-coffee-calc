import reducerStore from './reducer';
import {PageTitleTypes} from "./pageTitle/types";
import {PeopleTypes} from "./people/types";

export type AppState = ReturnType<typeof reducerStore>;

export type AppTypes = PageTitleTypes | PeopleTypes;
