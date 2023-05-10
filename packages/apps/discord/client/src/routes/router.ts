import { Inject } from "@funnelnek/ioc";
import { Route, RouteFetcherArgs, Router, Routing } from "@funnelnek/router";
import { HTTP_ROUTE } from "libs/router/src/constants/http-route";
import { RouteObject } from "react-router";


@Route()
export class DiscordRoute extends Router {
    readonly id: "discord" = "discord";
    readonly path: "discord" = "discord";
    readonly title: string = "Discord Clonet";


    constructor(@Inject(HTTP_ROUTE) routes: Routing[]) {
        super(routes);
    }

    async loader({ request, params, context }: RouteFetcherArgs): Promise<any> {

    }

    async action({ request, params, context }: RouteFetcherArgs): Promise<any> {

    } 

    async lazy(): Promise<RouteObject> {
        this.Component = await import("@funnelnek/discord-theme").then(m => m.DiscordIndexPage);

        return this as RouteObject;
    }
}