import { Schema } from 'mongoose';

export interface IFile {
    url: string;
}

export const FileSchema = new Schema<IFile>({
    url: String
});