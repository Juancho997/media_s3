export declare class ResponseCreator {
    readonly response: number | string | any[] | {};
    readonly status: number;
    readonly message: string;
    constructor(response: number | string | any[] | {}, status: number, message: string);
    toString(): string;
}
