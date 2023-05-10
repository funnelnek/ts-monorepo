import { Body, Controller, Post } from "@nestjs/common";
import { UserRegistration } from "../dto/UserRegistration";
import { UserService } from "../service/user.service";


@Controller("register")
export class DiscordRegisterController {
    constructor(private service: UserService) {}

    @Post()
    register(@Body() registration: UserRegistration) {
        return this.service.register(registration);
    }
}