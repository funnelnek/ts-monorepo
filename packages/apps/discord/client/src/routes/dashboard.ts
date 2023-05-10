import { Routing, Route, Guard, Outlet } from "@funnelnek/router";
import type { ComponentType } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, RouteObject } from "react-router";
import { DiscordActivateGuard } from "./guards/DiscordActivateGuard";
import { DiscordRoute } from "./router";


@Route({ 
    redirect: "login",    
    parent: DiscordRoute
})
export class DiscordDashboardRoute implements Routing {
    readonly title: string = "Discord Clone Dashboard | Funnelnek"
    readonly id: "discord-dashboard" = "discord-dashboard";
    readonly path: string = "dashboard";
    readonly caseSensitive: boolean = false;
    readonly index: boolean = true;

    @Outlet()
    public Component?: ComponentType<any>;
    
    @Guard({ canActivate: [DiscordActivateGuard] })
    async loader({request, params, context}: LoaderFunctionArgs): Promise<any> {
        return null;
    }

    async action({request, params, context}: ActionFunctionArgs): Promise<any> {
        return null;
    }

    async lazy(): Promise<RouteObject> {
        this.Component = await import("@funnelnek/discord-theme").then(m => m.DiscordDashboardPage);

        return this as RouteObject;
    };
}