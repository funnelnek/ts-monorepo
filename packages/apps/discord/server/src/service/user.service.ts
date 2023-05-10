import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import type { UserModel } from "../data/repository/user.model";
import { UserRegistration } from "../dto/UserRegistration";
import { User } from "../data/model/user/user.model";

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private repo: UserModel) {
    }

    async exist(id: string): Promise<boolean> {
        let results = await this.repo.exists({ $or: [{ email: id }, { username: id }] }).exec();        
        return results ? true : false;
    }

    async register(registration: UserRegistration): Promise<string> {
        const user = await this.repo.create(registration);
        
        return user.id;
    }

    async find(criteria: any): Promise<User[]> {
        return await this.repo.find(criteria).exec();        
    }

    async findOne(criteria: any): Promise<User | null> {
        return this.repo.findOne(criteria).exec();
    }
}