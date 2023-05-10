import { ConfigFactory, ConfigModule, registerAs } from "@nestjs/config";
import path from "path";
import { CorsConfiguration } from "./CorsConfiguration";
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";


class DiscordEnvironmentConfiguration implements EnvironmentConfiguration {
    readonly envFilePath: string = path.resolve(__dirname, "../../.env");
    readonly isGlobal: boolean = true;

    get load(): ConfigFactory[] | undefined {
        return [
            registerAs("cors", () => CorsConfiguration)
        ];
    }

    validate(config: Record<string, any>): Record<string, any> {
        return config;
    }
}

export default ConfigModule.forRoot(new DiscordEnvironmentConfiguration());