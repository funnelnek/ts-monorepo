import { InjectionToken } from "@funnelnek/ioc";
import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { discordSagas, sagaMiddleware } from "./sagas";


export const DiscordStore = configureStore({
    reducer: function (state: any, action: AnyAction) {
        throw new Error("Function not implemented.");
    },
    middleware: [sagaMiddleware]
});

export const DISCORD_STORE = new InjectionToken(DiscordStore);
sagaMiddleware.run(discordSagas);