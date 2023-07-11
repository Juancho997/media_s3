"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileResponseDto = void 0;
class UploadFileResponseDto {
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
exports.UploadFileResponseDto = UploadFileResponseDto;
;
//# sourceMappingURL=upload-file-response.dto.js.map