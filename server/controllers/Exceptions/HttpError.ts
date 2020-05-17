export const ERR_NAME_RESPONSE = 'HttpError';
export default class HttpError extends Error {
    private readonly _code: number;

    constructor(message: string, code: number) {
        super(message);
        this._code = code;
        this.name = ERR_NAME_RESPONSE;
    }

    get code(): number {
        return this._code;
    }
}
