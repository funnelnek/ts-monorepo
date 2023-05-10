import { HTMLProps } from "react";
export interface ImageProps extends HTMLProps<HTMLImageElement> {
    lazy?: boolean;
}
