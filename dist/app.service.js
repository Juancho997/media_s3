"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const constants_1 = require("./database/constants");
const mongoose_1 = require("mongoose");
const upload_file_response_dto_1 = require("./file/dto/response/upload-file-response.dto");
const response_creator_1 = require("./utils/response-creator");
let AppService = AppService_1 = class AppService {
    constructor(fileModel, configService) {
        this.fileModel = fileModel;
        this.configService = configService;
        this.logger = new common_1.Logger(AppService_1.name);
        this.s3Client = new client_s3_1.S3Client({
            region: this.configService.getOrThrow('AWS_S3_REGION'),
            credentials: {
                accessKeyId: this.configService.getOrThrow('AWS_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.getOrThrow('AWS_SECRET_ACCESS_KEY')
            }
        });
    }
    async uploadFile(uploadFileData) {
        try {
            await this.s3Client.send(new client_s3_1.PutObjectCommand({
                Bucket: this.configService.getOrThrow('AWS_BUCKET'),
                Key: uploadFileData.fileName,
                Body: uploadFileData.file,
                ContentType: uploadFileData.fileMimeType,
                ContentLength: uploadFileData.fileSize
            }));
            return new response_creator_1.ResponseCreator(new upload_file_response_dto_1.UploadFileResponseDto(uploadFileData.fileName), common_1.HttpStatus.CREATED, 'File uploaded');
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.InternalServerErrorException();
        }
        finally {
            this.s3Client.destroy();
        }
    }
    ;
};
AppService = AppService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.FILE_DB_MODEL)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        config_1.ConfigService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map