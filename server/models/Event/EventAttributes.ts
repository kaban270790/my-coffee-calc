export default interface EventAttributes {
    id?: number;
    date_start: Date;
    date_end: Date;
    diamonds: number | null,
    crystals: number | null,
}
