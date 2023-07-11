import * as mongoose from 'mongoose';
export declare const databaseProvider: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
};
