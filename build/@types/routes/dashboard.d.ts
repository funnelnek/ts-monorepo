import { Routing } from "@funnelnek/router";
import type { ComponentType } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, RouteObject } from "react-router";
export declare class DiscordDashboardRoute implements Routing {
    readonly title: string;
    readonly id: "discord-dashboard";
    readonly path: string;
    readonly caseSensitive: boolean;
    readonly index: boolean;
    Component?: ComponentType<any>;
    loader({ request, params, context }: LoaderFunctionArgs): Promise<any>;
    action({ request, params, context }: ActionFunctionArgs): Promise<any>;
    lazy(): Promise<RouteObject>;
}
