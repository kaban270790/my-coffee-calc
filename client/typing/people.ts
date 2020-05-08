export const HOUSE_LEVELS: HouseType[] = [
    1, 2, 3, 4, 5
];
export type HouseType = keyof { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' };

export interface ResidentNewInterface {
    name: string;
    house_level: HouseType | undefined;
}

export interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

export interface ResidentInterface extends ResidentNewInterface {
    id: number;
    added_ts: Date,
    deleted_ts: Date | null
}
