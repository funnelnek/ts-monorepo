import { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
export declare class DiscordServerModule implements NestModule {
    private config;
    constructor(config: ConfigService);
    configure(consumer: MiddlewareConsumer): void;
}
