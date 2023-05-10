import { ChangeEvent } from "react";

export interface Callee {
    id: string;
    onCodeChange(event: ChangeEvent) : void;
}