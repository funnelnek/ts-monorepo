import { Inject, Service } from "@funnelnek/ioc";
import { Router } from "@funnelnek/router";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouteObject } from "react-router-dom";


@Service()
export class DiscordApplication {
    private _router: RemixRouter;
    private _store: ToolkitStore;

    constructor(store: ToolkitStore, router: Router) {
        this._store = store;
        this._router = createBrowserRouter([router as RouteObject]);

        router.subscribe(this._router);
    }

    get router(): RemixRouter {
        return this._router;
    }

    get store(): ToolkitStore {
        return this._store;
    }
}