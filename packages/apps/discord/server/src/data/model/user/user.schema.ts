import { HydratedDocument, Schema } from "mongoose";
import { IdentityRecord } from "../../schema/identity-record.schema";

import { User } from "./user.model";
import { IsEmailValidator } from "../../validator/email.validator";
import { IsStrongPasswordValidator } from "../../validator/password.validator";
import { UserModel } from "../../repository/user.model";
import { IdentityModel } from "../../schema/identity-model.schema";
import { IdentityCollection } from "../../schema/identity-collection.schema";
import { IdentitySchemaOptions } from "../../schema/identity-schema-options";
import { IdentityQueryBuilder } from "../../schema/identity-query-builder";

const options: IdentitySchemaOptions = {};

export type UserDocument = HydratedDocument<IdentityRecord>;

export const UserSchema = new Schema<
    IdentityRecord, 
    UserModel, 
    IdentityModel, 
    IdentityQueryBuilder, 
    {}, 
    IdentityCollection, 
    IdentitySchemaOptions>({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        unique: true,
        set: (value: string): string => value.toLowerCase(),
        validate: { validator: new IsEmailValidator().validator }
    },
    password: {
        type: String,
        required: true,
        hide: true,
        validate: { validator:  new IsStrongPasswordValidator().validator }
    }
}, options);

const schema = UserSchema.loadClass(User);