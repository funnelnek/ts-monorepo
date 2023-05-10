import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from "../dto/UserLoginDto";
import { UserRegistration } from "../dto/UserRegistration";
import { UserService } from "../service/user.service";
export declare class AuthService {
    private jwt;
    private users;
    constructor(jwt: JwtService, users: UserService);
    register(registration: UserRegistration): Promise<string>;
    login({ email, password }: UserLoginDto): Promise<string>;
}
