import { SchemaOptions } from "mongoose";
import { IdentityCollection } from "./identity-collection.schema";
import { IdentityModel } from "./identity-model.schema";
import { IdentityQueryBuilder } from "./identity-query-builder";
import { IdentityRecord } from "./identity-record.schema";
export interface IdentitySchemaOptions extends SchemaOptions<IdentityRecord, IdentityModel, IdentityQueryBuilder, IdentityCollection> {
}
