import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { UserService } from "../../service/user.service";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private users;
    constructor(authService: AuthService, users: UserService);
    validate(username: string, password: string): Promise<any>;
}
export {};
