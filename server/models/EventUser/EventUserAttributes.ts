export default interface EventUserAttributes {
    id?: number;
    user: number;
    event: number;
    cups: number | null;
    diamonds: number | null;
    crystals: number | null;
}
