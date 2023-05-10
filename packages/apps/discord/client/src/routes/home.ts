import { IndexPage } from "@funnelnek/discord-theme";
import { Lazy, Outlet, Route, Routing } from "@funnelnek/router";
import type { ComponentType } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, RouteObject } from "react-router";
import { DiscordRoute } from "./router";


@Route({
    parent: DiscordRoute
})
export class DiscordIndexRoute implements Routing {
    readonly id: "discord-index" = "discord-index";
    readonly title: string = "";
    readonly index: boolean = true;
    readonly caseSensitive: boolean = false;

    @Outlet({ lazy: true })
    Component!: ComponentType<IndexPage> | null;

    @Lazy()
    ErrorBoundary!: ComponentType | null;

    async loader({request, params, context}: LoaderFunctionArgs): Promise<any> {

    }

    async action({request, params, context}: ActionFunctionArgs): Promise<any> {
        
    }

    async lazy(): Promise<RouteObject> {
        this.Component = await import("@funnelnek/discord-theme").then(m => m.DiscordIndexPage);

        return this as RouteObject;
    }
}