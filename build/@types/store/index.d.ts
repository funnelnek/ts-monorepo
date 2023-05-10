import { InjectionToken } from "@funnelnek/ioc";
import { AnyAction } from "@reduxjs/toolkit";
export declare const DiscordStore: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<any, AnyAction, import("redux-observable").EpicMiddleware<import("redux").Action<any>, import("redux").Action<any>, void, any>[]>;
export declare const DISCORD_STORE: InjectionToken<import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<any, AnyAction, import("redux-observable").EpicMiddleware<import("redux").Action<any>, import("redux").Action<any>, void, any>[]>>;
