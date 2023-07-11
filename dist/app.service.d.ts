import { ConfigService } from '@nestjs/config';
import { IFile } from './file/file.schema';
import { Model } from 'mongoose';
import { UploadFileRequestDto } from "./file/dto/request/upload-file-request.dto";
import { ResponseCreator } from "./utils/response-creator";
export declare class AppService {
    private readonly fileModel;
    private readonly configService;
    private readonly logger;
    private readonly s3Client;
    constructor(fileModel: Model<IFile>, configService: ConfigService);
    uploadFile(uploadFileData: UploadFileRequestDto): Promise<ResponseCreator>;
}
