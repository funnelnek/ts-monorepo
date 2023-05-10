import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { hash, compare } from "bcryptjs";
import { UserLoginDto } from "../dto/UserLoginDto";
import { UserRegistration } from "../dto/UserRegistration";
import { UserService } from "../service/user.service";


@Injectable()
export class AuthService {
    constructor(private jwt: JwtService, private users: UserService) {

    }

    async register(registration: UserRegistration) {
        const exists = await this.users.exist(registration.email);

        if (exists) {
            throw new BadRequestException("User already exists");
        }

        registration.password = await hash(registration.password, 10);
        const user = await this.users.register(registration);

        return user;
    }

    async login({ email, password }: UserLoginDto) {
        let identity = await this.users.findOne({ email });

        if (!identity) {
            throw new BadRequestException("User not found.");
        }

        let isMatch = await compare(password, identity.password);

        if (!isMatch) {
            throw new BadRequestException("Username or password doesn't match");
        }

        let options: JwtSignOptions = {
            issuer: "htttp://localhost/auth/issuer",
            subject: identity.id,
            expiresIn: "24h",            
        };

        let accessToken = this.jwt.sign({            
            email: identity.email,
            scope: "openid profile read:patients read:admin"
        }, options);

        return accessToken;
    }
}