import { ValidateOpts } from "mongoose";
export declare class IsStrongPasswordValidator implements ValidateOpts<string> {
    validator(value: string): boolean;
}
