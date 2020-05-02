import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import {MenuItemType} from "./MenuItemType";

const menuItems: MenuItemType[] = [
    {
        title: 'Главная',
        icon: HomeIcon
    },
    {
        title: 'Жители',
        icon: PeopleIcon
    },
    {
        title: 'Фестивали',
        icon: EmojiEventsIcon
    }
];
export default menuItems;
