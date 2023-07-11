export class UploadFileResponseDto {
    constructor(
        public readonly fileName: string,
    ) { };

    toString() {
        return JSON.stringify({
            fileName: this.fileName,
        });
    };
};
