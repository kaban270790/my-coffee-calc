export default interface UserAttributes {
    id?: number;
    user_name: string;
    home: number;
    added_ts: Date;
    deleted_ts: Date | null;
}
