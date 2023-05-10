import { Module } from "@nestjs/common";
import { DiscordConfigurationModule } from "../config/config.module";
import { UserService } from "../service/user.service";
import { DiscordLoginController } from "./login.controller";
import { DiscordRegisterController } from "./register.controller";

@Module({
    imports: [DiscordConfigurationModule],
    controllers: [
        DiscordLoginController,
        DiscordRegisterController
    ],
    providers: [UserService]
})
export class DiscordRoutingModule {}