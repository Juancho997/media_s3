"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadFileResponseDto = void 0;
class DownloadFileResponseDto {
    constructor(file) {
        this.file = file;
    }
    ;
    toString() {
        return JSON.stringify({
            file: this.file,
        });
    }
    ;
}
exports.DownloadFileResponseDto = DownloadFileResponseDto;
;
//# sourceMappingURL=download-file-response.dto.js.map