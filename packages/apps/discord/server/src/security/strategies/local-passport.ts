import { Strategy } from "passport-local";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { compare } from "bcryptjs";
import { UserService } from "../../service/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService, private users: UserService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const exists = await this.users.exist(username);

        if (!exists) {
            throw new UnauthorizedException();
        }

        
    }
}