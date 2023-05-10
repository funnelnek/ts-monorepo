import { AsyncModelFactory } from "@nestjs/mongoose";
import { User } from "./user.model";
import { UserSchema } from "./user.schema";
import hidden from "mongoose-hidden";

export default {
    name: User.name,
    collection: "users",
    useFactory(): typeof UserSchema {
        UserSchema.plugin(hidden({hidden: { password: true }}));
        return UserSchema
    }
} as AsyncModelFactory;