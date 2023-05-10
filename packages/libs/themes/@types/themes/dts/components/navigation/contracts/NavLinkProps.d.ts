import { HTMLProps } from "react";
export interface NavLinkProps extends HTMLProps<HTMLAnchorElement> {
    to: string;
    end?: boolean;
    caseSensitive?: boolean;
}
