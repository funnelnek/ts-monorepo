import { InjectionToken } from "@funnelnek/ioc";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore"
import { AnyAction } from "redux";

const AppStore = configureStore({
    reducer: function (state: any, action: AnyAction) {
        throw new Error("Function not implemented.");
    }
});

export const APP_STORE = new InjectionToken(AppStore);