import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { HttpStatus, Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FILE_DB_MODEL } from './database/constants';
import { IFile } from './file/file.schema';
import { Model } from 'mongoose';
import { UploadFileRequestDto } from "./file/dto/request/upload-file-request.dto";
import { UploadFileResponseDto } from "./file/dto/response/upload-file-response.dto";
import { ResponseCreator } from "./utils/response-creator";
// import { DownloadFileRequestDto } from './dto/request/download-file-request.dto';

@Injectable()
export class AppService {
 
  private readonly logger = new Logger(AppService.name);
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
    credentials: {
      accessKeyId: this.configService.getOrThrow('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.getOrThrow('AWS_SECRET_ACCESS_KEY')
    }
  });


  constructor(
    @Inject(FILE_DB_MODEL) private readonly fileModel: Model<IFile>,
    private readonly configService: ConfigService
  ) { }


  async uploadFile(uploadFileData: UploadFileRequestDto) {

    try {

      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: this.configService.getOrThrow('AWS_BUCKET'),
          Key: uploadFileData.fileName,
          Body: uploadFileData.file,
          ContentType: uploadFileData.fileMimeType,
          ContentLength: uploadFileData.fileSize
        })
      );

      return new ResponseCreator(
        new UploadFileResponseDto(uploadFileData.fileName),
        HttpStatus.CREATED,
        'File uploaded'
      );

    } catch (err) {
      this.logger.error(err)
      throw new InternalServerErrorException();
    } finally {
      this.s3Client.destroy();
    }

  };


  // async downloadFile(downloadFileData: DownloadFileRequestDto) {

  //   try {

  //     const file = await this.s3Client.send(
  //       new GetObjectCommand({
  //         Bucket: this.configService.getOrThrow('AWS_BUCKET'),
  //         Key: downloadFileData.fileName
  //       })
  //     );

  //     return new ResponseCreator(
  //       file,
  //       HttpStatus.FOUND,
  //       'File downloaded'
  //     );

  //   } catch (err) {
  //     this.logger.error(err);
  //     throw new InternalServerErrorException();

  //   } finally {
  //     this.s3Client.destroy();
  //   }
  // };

}
