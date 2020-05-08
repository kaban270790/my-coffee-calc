import {HOUSE_LEVELS, HouseType} from "../typing/people";

export function convertHouseLevel(value: number | string): HouseType | undefined {
    for (let houseLevel of HOUSE_LEVELS) {
        if (houseLevel === value) {
            return value;
        }
    }
}
