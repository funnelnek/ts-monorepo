import { ThemeColor } from "@funnelnek/themes/types";
import { HTMLProps } from "react";
import { IconSize } from "../types/IconSize";
import { IconVariant } from "../types/IconVariant";
export interface IconProps extends Omit<HTMLProps<HTMLElement>, "size"> {
    name: string;
    size?: IconSize;
    variant?: IconVariant;
    color?: ThemeColor;
    prefix?: string;
}
