import { UserRegistration } from "../dto/UserRegistration";
import { UserService } from "../service/user.service";
export declare class DiscordRegisterController {
    private service;
    constructor(service: UserService);
    register(registration: UserRegistration): Promise<string>;
}
