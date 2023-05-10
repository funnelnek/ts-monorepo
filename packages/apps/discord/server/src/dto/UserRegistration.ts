import { MinLength, MaxLength, IsEmail, IsStrongPassword } from "class-validator";
import { IdentityRecord } from "../data/schema/identity-record.schema";


export class UserRegistration implements IdentityRecord {
    @MinLength(3)
    @MaxLength(12)
    username!: string;

    @IsEmail()    
    email!: string;

    @IsStrongPassword()
    password!: string;
}