import { PaginationIconsProps } from "./PaginationIconsProps";
import { PaginationOnChangeHandler } from "./PaginationOnChangeHandler";


export interface PaginationProps {
    count?: number;
    icons?: PaginationIconsProps;
    initial?: number;
    disabled?: boolean;
    color?: string;
    variant?: "outlined" | "filled";
    rounded?: boolean;
    showFirst?: boolean;
    showLast?: boolean;
    onPageChange?: PaginationOnChangeHandler;
}