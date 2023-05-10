import { createAction } from "@reduxjs/toolkit";

export const CONNECTED = "[CHATTY] CONNECTED";
export const connected = createAction<string>(CONNECTED);