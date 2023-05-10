import { HydratedDocument, Schema } from "mongoose";
import { IdentityRecord } from "../../schema/identity-record.schema";
import { UserModel } from "../../repository/user.model";
import { IdentityModel } from "../../schema/identity-model.schema";
import { IdentityCollection } from "../../schema/identity-collection.schema";
import { IdentitySchemaOptions } from "../../schema/identity-schema-options";
import { IdentityQueryBuilder } from "../../schema/identity-query-builder";
export type UserDocument = HydratedDocument<IdentityRecord>;
export declare const UserSchema: Schema<IdentityRecord, UserModel, IdentityModel, IdentityQueryBuilder, {}, IdentityCollection, IdentitySchemaOptions, IdentityRecord>;
