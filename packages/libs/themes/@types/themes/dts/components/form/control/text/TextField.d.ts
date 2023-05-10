import { ForwardRefExoticComponent, RefAttributes } from "react";
import { TextFieldProps } from "./contracts";
export declare const TextField: ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & RefAttributes<HTMLInputElement>>;
export default TextField;
