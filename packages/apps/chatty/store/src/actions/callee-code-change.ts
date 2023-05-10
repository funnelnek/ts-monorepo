import { createAction } from "@reduxjs/toolkit";

export const CALLEE_CODE_CHANGE = "[Chatty] CALLEE_CODE_CHANGE";
export const codeChanged = createAction<string>(CALLEE_CODE_CHANGE);