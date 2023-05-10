import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local-passport";
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from "./strategies/jwt-passport";
import { JwtAuthGuardProvider } from "./guards/jwt-auth.guard";

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [
        AuthService, 
        LocalStrategy,
        JwtStrategy,
        JwtAuthGuardProvider
    ],
    exports: [
        AuthService
    ]
})
export class AuthModule {}