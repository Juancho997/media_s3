/// <reference types="node" />
export declare class UploadFileRequestDto {
    readonly fileName: string;
    readonly file: Buffer;
    readonly fileMimeType: string;
    readonly fileSize: number;
    constructor(fileName: string, file: Buffer, fileMimeType: string, fileSize: number);
    toString(): string;
}
