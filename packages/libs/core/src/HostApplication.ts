import { Inject, Injectable, injector, ProviderFactory, Reflector } from "@funnelnek/ioc";
import { routerState, Router } from "@funnelnek/router";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Router as RemixRouter } from "@remix-run/router";
import { AnyAction, Middleware, Dispatch } from "redux";
import { AggregateRoot } from "./AggregateRoot";
import { IHostApplication } from "./contracts";
import { createBrowserRouter, RouteObject } from "react-router-dom";


export class HostApplication implements IHostApplication { 
    private static __instance: HostApplication;   
    private browserRouter: RemixRouter;

    name: string = "host";

    constructor(private aggregate: AggregateRoot, router: Router) {
        if (HostApplication.__instance) {
            throw new Error("Host application is already running");
        }

        HostApplication.__instance = this;
        
        routerState.subscribe(router.handle.snapshot);

        let browserRouter = this.browserRouter = createBrowserRouter([router as RouteObject]);

        browserRouter.subscribe(routerState.next);
        new ProviderFactory({ provide: HostApplication, useValue: this });
    }

    get router(): RemixRouter {
        return this.browserRouter;
    }

    get store(): ToolkitStore<any, AnyAction, readonly Middleware<{}, any, Dispatch<AnyAction>>[]> {
        return this.aggregate.store;
    }

    get injector(): Reflector {
        return injector;
    };
}