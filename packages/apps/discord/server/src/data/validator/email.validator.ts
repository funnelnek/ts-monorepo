import { ValidateOpts } from "mongoose";
import isEmail from "validator/lib/isEmail";

export class IsEmailValidator implements ValidateOpts<string> {

    validator(value: string): boolean {
        return isEmail(value);
    }
    
}