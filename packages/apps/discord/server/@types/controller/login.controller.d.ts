import { UserLoginDto } from "../dto/UserLoginDto";
import { AuthService } from "../security/auth.service";
export declare class DiscordLoginController {
    private service;
    constructor(service: AuthService);
    login(user: UserLoginDto): Promise<string>;
}
