import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ThemeColor } from "../../../types";
import { ButtonVariantType } from "../types";
export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariantType;
    color?: ThemeColor;
    type?: "button" | "submit" | "reset";
}
