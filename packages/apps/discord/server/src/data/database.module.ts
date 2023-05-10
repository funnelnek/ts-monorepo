import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import DiscordEnvironmentConfiguration from "../config/DiscordEnvironmentConfiguration";
import { DiscordMongoDBFactory } from "./DiscordMongoDBFactory";
import { UserRepositoryModule } from "./model/user/user.module";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [DiscordEnvironmentConfiguration],
            useFactory: DiscordMongoDBFactory,
            inject: [ConfigService]
        }),
        UserRepositoryModule
    ],
    exports: [
        MongooseModule,
        UserRepositoryModule
    ]
})
export class DiscordDatabaseModule {}
