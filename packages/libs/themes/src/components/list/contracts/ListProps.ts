import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement | HTMLOListElement>, HTMLUListElement | HTMLOListElement> {
    ordered?: boolean;
}