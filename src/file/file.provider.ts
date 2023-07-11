import { Connection } from 'mongoose';
import { FileSchema } from './file.schema';
import { FILE_DB_MODEL, FILE_DB_COLLECTION } from 'src/database/constants';

export const fileProvider =
{
    provide: FILE_DB_MODEL,
    useFactory: (connection: Connection) => connection.model(FILE_DB_COLLECTION, FileSchema),
    inject: ['DATABASE_CONNECTION'],
};