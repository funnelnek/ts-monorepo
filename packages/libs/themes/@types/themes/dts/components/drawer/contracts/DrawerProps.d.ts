import { HTMLProps } from "react";
export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    open?: boolean;
    minimize?: boolean;
}
