import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import {MenuItemType} from "./MenuItemType";
import events from '../../routes/root/events';
import people from '../../routes/root/people';
import home from '../../routes/root/home';

export const INDEX_MENU_MAI = 0;
export const INDEX_MENU_PEOPLE = 1;
export const INDEX_MENU_EVENTS = 2;
export const TITLE_MAIN = 'Главная';
export const TITLE_PEOPLE = 'Жители';
export const TITLE_EVENTS = 'Фестивали';
const menuItems: MenuItemType[] = [
    {
        title: TITLE_MAIN,
        icon: HomeIcon,
        route: home,
    },
    {
        title: TITLE_PEOPLE,
        icon: PeopleIcon,
        route: people
    },
    {
        title: TITLE_EVENTS,
        icon: EmojiEventsIcon,
        route: events

    }
];
export default menuItems;
