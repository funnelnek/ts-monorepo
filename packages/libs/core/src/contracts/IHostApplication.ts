import { Router as RemixRouter } from "@remix-run/router";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Injector } from "@funnelnek/ioc";
import { IApplication } from "./IApplication";


export interface IHostApplication extends IApplication {
    router: RemixRouter;
    store: ToolkitStore;
}