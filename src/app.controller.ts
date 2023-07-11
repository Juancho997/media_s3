import { Controller, Get, Logger, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, FileTypeValidator, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { UploadFileRequestDto } from './file/dto/request/upload-file-request.dto';

@Controller()
export class AppController {

  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Post('api/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }), //oneKb = 1000
        new FileTypeValidator({ fileType: 'application/zip' })
      ]
    })
  ) file: Express.Multer.File) {

    try {

      const data = new UploadFileRequestDto(
        file.originalname,
        file.buffer,
        file.mimetype,
        file.size)

      return this.appService.uploadFile(data)

    } catch (err) {
      this.logger.error(err)
      throw err;
    }
  };

  // @UseGuards(AuthGuard)
  // @Post('api/download')
  // downloadFile(@Body() data: any) {
  //   try {
  //     return this.appService.downloadFile(data)
  //   } catch (err) {
  //     throw err;
  //   }
  // };
}
