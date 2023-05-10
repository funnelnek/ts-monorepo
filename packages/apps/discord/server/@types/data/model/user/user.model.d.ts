import { IdentityModel } from "../../schema/identity-model.schema";
export declare class User implements IdentityModel {
    id?: string;
    username: string;
    email: string;
    password: string;
    resetPassword(password: string): void;
}
