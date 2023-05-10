import { Action, AnyAction, ConfigureStoreOptions, Middleware, StoreEnhancer } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";


export interface IAggregateRoot<
    T = any, 
    A extends Action = AnyAction, 
    M extends ReadonlyArray<Middleware<any, T>> = ReadonlyArray<Middleware<any, T>>, 
    E extends ReadonlyArray<StoreEnhancer> = ReadonlyArray<StoreEnhancer>> 
    extends ConfigureStoreOptions<T, A, M, E> {
    store: ToolkitStore<T, A>;
}