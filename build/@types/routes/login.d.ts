import { Routing, RouteDataRequest } from "@funnelnek/router";
import type { RouteObject } from "react-router";
import type { ComponentType } from "react";
export declare class DiscordLoginRoute implements Routing {
    readonly id: "discord-login";
    readonly path: string;
    readonly index: boolean;
    readonly caseSensitive: boolean;
    readonly title: string;
    Component?: ComponentType;
    loader({ request, params, context }: RouteDataRequest): Promise<any>;
    action({ request, params, context }: RouteDataRequest): Promise<any>;
    lazy(): Promise<RouteObject>;
}
