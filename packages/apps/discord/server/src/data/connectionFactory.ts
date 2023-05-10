import { Connection } from "mongoose";

export const connectionFactory = (connection: Connection): Connection => {
    return connection;
}