"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadFileRequestDto = void 0;
class DownloadFileRequestDto {
    constructor(fileName) {
        this.fileName = fileName;
    }
    ;
    toString() {
        return JSON.stringify({
            fileName: this.fileName,
        });
    }
    ;
}
exports.DownloadFileRequestDto = DownloadFileRequestDto;
;
//# sourceMappingURL=download-file-request.dto.js.map