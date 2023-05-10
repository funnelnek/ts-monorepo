import { Model } from "mongoose";
import { IdentityModel } from "../schema/identity-model.schema";
import { IdentityQueryBuilder } from "../schema/identity-query-builder";
import { IdentityRecord } from "../schema/identity-record.schema";


export interface UserModel extends Model<IdentityRecord, IdentityQueryBuilder, IdentityModel, {}> {
}