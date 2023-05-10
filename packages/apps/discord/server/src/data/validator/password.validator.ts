import { ValidateOpts } from "mongoose";
import isStrongPassword from "validator/lib/isStrongPassword";


export class IsStrongPasswordValidator implements ValidateOpts<string> {
    validator(value: string): boolean {
        return isStrongPassword(value);
    }
}