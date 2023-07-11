"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileProvider = void 0;
const file_schema_1 = require("./file.schema");
const constants_1 = require("../database/constants");
exports.fileProvider = {
    provide: constants_1.FILE_DB_MODEL,
    useFactory: (connection) => connection.model(constants_1.FILE_DB_COLLECTION, file_schema_1.FileSchema),
    inject: ['DATABASE_CONNECTION'],
};
//# sourceMappingURL=file.provider.js.map