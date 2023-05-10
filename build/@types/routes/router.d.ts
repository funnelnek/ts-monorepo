import { RouteFetcherArgs, Router, Routing } from "@funnelnek/router";
import { RouteObject } from "react-router";
export declare class DiscordRoute extends Router {
    readonly id: "discord";
    readonly path: "discord";
    readonly title: string;
    constructor(routes: Routing[]);
    loader({ request, params, context }: RouteFetcherArgs): Promise<any>;
    action({ request, params, context }: RouteFetcherArgs): Promise<any>;
    lazy(): Promise<RouteObject>;
}
