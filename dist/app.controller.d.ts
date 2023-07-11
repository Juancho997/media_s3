/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly logger;
    constructor(appService: AppService);
    uploadFile(file: Express.Multer.File): Promise<import("./utils/response-creator").ResponseCreator>;
}
