import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import { connectionFactory } from "./connectionFactory";
import { connectionErrorFactory } from "./connectionErrorFactory";


export class DiscordMongoDBOptionsFactory implements MongooseOptionsFactory {
    private readonly name: string = "discord";
    constructor(private config: ConfigService) {
    }

    async createMongooseOptions(): Promise<MongooseModuleOptions> {
        const uri = this.config.get<string>("MONGO_URI");
        
        return { 
            uri,
            connectionFactory,
            connectionErrorFactory 
        } as MongooseModuleOptions;
    }
}

export const DiscordMongoDBFactory = async (config: ConfigService): Promise<MongooseModuleOptions> => new DiscordMongoDBOptionsFactory(config).createMongooseOptions();