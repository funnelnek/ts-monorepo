import { HTMLProps } from "react";
export interface CardProps extends HTMLProps<HTMLDivElement> {
    title?: string;
    media?: any;
}
