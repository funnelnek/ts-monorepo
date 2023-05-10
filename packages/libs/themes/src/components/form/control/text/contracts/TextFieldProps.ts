import { Ref, RefAttributes } from "react";
import { InputProps } from "../../../contracts";


export interface TextFieldProps extends InputProps, RefAttributes<HTMLInputElement> {
    startAdornment?: any;
    endAdornment?: any;
    helperText?: string;
    type?: "text" | "password" | "date" | "email" | "tel" | "month" | "number" | "search" | "time" | "url" | "week";
    placeholder?: string;
    variant?: "standard" | "outlined" | "filled";    
    ref?: Ref<HTMLInputElement>;
    multi?: boolean;
}