import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
export declare class DiscordMongoDBOptionsFactory implements MongooseOptionsFactory {
    private config;
    private readonly name;
    constructor(config: ConfigService);
    createMongooseOptions(): Promise<MongooseModuleOptions>;
}
export declare const DiscordMongoDBFactory: (config: ConfigService) => Promise<MongooseModuleOptions>;
