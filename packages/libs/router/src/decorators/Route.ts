import { Routing } from "../contracts";
import { Type  } from "@funnelnek/ioc";
import { RouteConfig } from "../contracts/RouteConfig";


export const Route = (config?: RouteConfig) => {
    return (ctor: Type<Routing>): void => {
        const route: Routing = ctor.prototype;
        const id = route.id ? route.id : ctor.name;
        const path = route.path;
    }
}