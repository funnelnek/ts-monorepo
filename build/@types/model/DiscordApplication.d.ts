import { Router } from "@funnelnek/router";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Router as RemixRouter } from "@remix-run/router";
export declare class DiscordApplication {
    private _router;
    private _store;
    constructor(store: ToolkitStore, router: Router);
    get router(): RemixRouter;
    get store(): ToolkitStore;
}
