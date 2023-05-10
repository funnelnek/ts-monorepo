import { Injector } from "@funnelnek/ioc";

export interface IApplication {
    name: string,
    injector: Injector;
}