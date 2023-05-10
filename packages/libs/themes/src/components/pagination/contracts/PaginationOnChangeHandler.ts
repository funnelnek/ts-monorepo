import { PaginationOnChangeEvent } from "./PaginationEvent";

export interface PaginationOnChangeHandler {
    (event: PaginationOnChangeEvent): void;
}