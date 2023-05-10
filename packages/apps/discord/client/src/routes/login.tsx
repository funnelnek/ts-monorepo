import { Guard, Route, Routing, Outlet, RouteDataRequest } from "@funnelnek/router";
import type { RouteObject } from "react-router";
import type { ComponentType } from "react";
import { LoginDeactivationGuard } from "./guards/LoginDeactivationGuard";
import { DiscordRoute } from "./router";


@Route({
    redirect: "login",
    parent: DiscordRoute
})
export class DiscordLoginRoute implements Routing {
    readonly id: "discord-login" = "discord-login";
    readonly path: string = "login";
    readonly index: boolean = true;
    readonly caseSensitive: boolean  = false;
    readonly title: string = "Discord Clone Login | Funnelnek";
    
    @Outlet()
    public Component?: ComponentType;    

    async loader({ request, params, context }: RouteDataRequest): Promise<any> {
    }
   
    async action({ request, params, context }: RouteDataRequest): Promise<any> {
    }
    
    async lazy(): Promise<RouteObject> {
        this.Component = await import("@funnelnek/discord-theme").then(m => m.DiscordLoginPage);

        return this as RouteObject;
    };
}