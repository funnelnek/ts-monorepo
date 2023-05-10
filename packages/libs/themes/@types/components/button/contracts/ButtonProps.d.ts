import { HTMLProps } from "react";
import { ThemeColor } from "../../../types";
import { IconProps } from "../../icon/contracts/IconProps";
import { ButtonStateType, ButtonVariantType } from "../types";
export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    state?: ButtonStateType;
    variant?: ButtonVariantType;
    color?: ThemeColor;
    label?: string;
    icon?: IconProps;
}
