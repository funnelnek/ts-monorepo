import { IdentityModel } from "../../schema/identity-model.schema";


export class User implements IdentityModel {   
    id?: string; 
    username!: string;
    email!: string;
    password!: string;

    resetPassword(password: string): void {
        throw new Error("Method not implemented.");
    }
}

