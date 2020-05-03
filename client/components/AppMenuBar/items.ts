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
const menuItems: MenuItemType[] = [
    {
        title: 'Главная',
        icon: HomeIcon,
        route: home,
    },
    {
        title: 'Жители',
        icon: PeopleIcon,
        route: people
    },
    {
        title: 'Фестивали',
        icon: EmojiEventsIcon,
        route: events

    }
];
export default menuItems;
