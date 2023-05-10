import { MongooseError } from "mongoose";

export const connectionErrorFactory = (error: MongooseError): MongooseError => {
    return error;
}