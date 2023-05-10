import { ValidateOpts } from "mongoose";
export declare class IsEmailValidator implements ValidateOpts<string> {
    validator(value: string): boolean;
}
