import { ChattyApplicationState } from "@funnelnek/chatty/core";
import { createSelector } from "@reduxjs/toolkit";


export const getSocketId = createSelector((store: ChattyApplicationState) => store.id, (id) => id);