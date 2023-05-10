import { PayloadAction } from "@reduxjs/toolkit";

export interface PipeTransform<T = any, R = T> {
    transform(command: T): PayloadAction<R>;
}