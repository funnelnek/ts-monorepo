import { PayloadAction } from "@reduxjs/toolkit";

export interface ICommandHandler<T, M = never, E = never> {
    execute(command: T): PayloadAction<T, string, M, E>;
}