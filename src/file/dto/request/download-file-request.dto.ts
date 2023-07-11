export class DownloadFileRequestDto {
    constructor(
        public readonly fileName: string,
    ) { };

    toString() {
        return JSON.stringify({
            fileName: this.fileName,
        });
    };
};