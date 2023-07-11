export class UploadFileRequestDto {
    constructor(
        public readonly fileName: string,
        public readonly file: Buffer,
        public readonly fileMimeType: string,
        public readonly fileSize: number
    ) { };

    toString() {
        return JSON.stringify({
            fileName: this.fileName,
            file: this.file,
            fileMimeType: this.fileMimeType,
            fileSize : this.fileSize
        });
    };
};
