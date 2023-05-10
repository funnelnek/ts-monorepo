import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import UserModel from "./user.feature";


@Module({
    imports: [MongooseModule.forFeatureAsync([UserModel])],
    exports: [MongooseModule]
})
export class UserRepositoryModule {}