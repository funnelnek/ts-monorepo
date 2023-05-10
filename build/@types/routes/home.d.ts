import { IndexPage } from "@funnelnek/discord-theme";
import { Routing } from "@funnelnek/router";
import type { ComponentType } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs, RouteObject } from "react-router";
export declare class DiscordIndexRoute implements Routing {
    readonly id: "discord-index";
    readonly title: string;
    readonly index: boolean;
    readonly caseSensitive: boolean;
    Component: ComponentType<IndexPage> | null;
    ErrorBoundary: ComponentType | null;
    loader({ request, params, context }: LoaderFunctionArgs): Promise<any>;
    action({ request, params, context }: ActionFunctionArgs): Promise<any>;
    lazy(): Promise<RouteObject>;
}
