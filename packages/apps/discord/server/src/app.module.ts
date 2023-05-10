import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { DiscordRoutingModule } from "./controller/route.module";
import { DiscordConfigurationModule } from "./config/config.module";
import { ConfigService } from "@nestjs/config";


@Module({
    imports: [
        DiscordConfigurationModule,
        DiscordRoutingModule
    ]
})
export class DiscordServerModule implements NestModule {
    constructor(private config: ConfigService) {}
    
    configure(consumer: MiddlewareConsumer) {
    }
}