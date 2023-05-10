import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserLoginDto } from "../dto/UserLoginDto";
import { AuthService } from "../security/auth.service";


@Controller("login")
export class DiscordLoginController {
    constructor(private service: AuthService) {}

    @Post()
    @UseGuards(AuthGuard('local'))
    login(@Body() user: UserLoginDto) {
        return this.service.login(user);
    }
}