import type { UserModel } from "../data/repository/user.model";
import { UserRegistration } from "../dto/UserRegistration";
import { User } from "../data/model/user/user.model";
export declare class UserService {
    private repo;
    constructor(repo: UserModel);
    exist(id: string): Promise<boolean>;
    register(registration: UserRegistration): Promise<string>;
    find(criteria: any): Promise<User[]>;
    findOne(criteria: any): Promise<User | null>;
}
