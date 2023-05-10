import { Routing } from "@funnelnek/router";
import type { ActionFunctionArgs, LoaderFunctionArgs, RouteObject } from "react-router";
import type { ComponentType } from "react";
export declare class DiscordRegisterRoute implements Routing {
    readonly id: "discord-register";
    readonly path: string;
    Component: ComponentType<any>;
    loader({ request, params, context }: LoaderFunctionArgs): Promise<any>;
    action({ request, params, context }: ActionFunctionArgs): Promise<any>;
    lazy(): Promise<RouteObject>;
}
