import { HTMLProps, ReactNode } from "react";
import { IconProps } from "../../icon/contracts/IconProps";
export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    label?: string;
    icon?: IconProps;
    children?: ReactNode;
}
