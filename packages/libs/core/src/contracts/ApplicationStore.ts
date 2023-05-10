import { Action, AnyAction, EnhancedStore } from "@reduxjs/toolkit";

export interface ApplicationStore<T = any, A extends Action<string> = AnyAction> {
    store: EnhancedStore<T, A>;
}