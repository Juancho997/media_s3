export class DownloadFileResponseDto {
    constructor(
        public readonly file: Buffer,
    ) { };

    toString() {
        return JSON.stringify({
            file: this.file,
        });
    };
};
