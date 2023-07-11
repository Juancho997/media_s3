"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileRequestDto = void 0;
class UploadFileRequestDto {
    constructor(fileName, file, fileMimeType, fileSize) {
        this.fileName = fileName;
        this.file = file;
        this.fileMimeType = fileMimeType;
        this.fileSize = fileSize;
    }
    ;
    toString() {
        return JSON.stringify({
            fileName: this.fileName,
            file: this.file,
            fileMimeType: this.fileMimeType,
            fileSize: this.fileSize
        });
    }
    ;
}
exports.UploadFileRequestDto = UploadFileRequestDto;
;
//# sourceMappingURL=upload-file-request.dto.js.map