import { Module } from "@nestjs/common";
import { DiscordDatabaseModule } from "../data/database.module";
import DiscordEnvironmentConfiguration from "./DiscordEnvironmentConfiguration";

@Module({
    imports: [
        DiscordEnvironmentConfiguration,
        DiscordDatabaseModule
    ],
    exports: [
        DiscordEnvironmentConfiguration,
        DiscordDatabaseModule
    ]
})
export class DiscordConfigurationModule {}