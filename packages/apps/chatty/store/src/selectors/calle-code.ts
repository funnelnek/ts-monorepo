import { ChattyApplicationState } from "@funnelnek/chatty/core";
import { createSelector } from "@reduxjs/toolkit";

export const getCalleeCode = createSelector(
    (app: ChattyApplicationState) => app.callee, 
    (callee) => callee?.id
);