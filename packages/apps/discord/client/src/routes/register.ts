import { Guard, Outlet, Route, Routing } from "@funnelnek/router";
import type { ActionFunctionArgs, LoaderFunctionArgs, RouteObject } from "react-router";
import type { ComponentType } from "react";
import { DiscordRoute } from "./router";


@Route(DiscordRoute)
export class DiscordRegisterRoute implements Routing {
    readonly id: "discord-register" = "discord-register";
    readonly path: string = "register";
    
    @Outlet()
    Component!: ComponentType<any>
    
    async loader({ request, params, context }: LoaderFunctionArgs): Promise<any> {
        return null;
    }
    
    async action({ request, params, context }: ActionFunctionArgs): Promise<any> {
        return null;
    }

    async lazy(): Promise<RouteObject> {
        this.Component = await import("@funnelnek/discord-theme").then(m => m.DiscordRegistrationPage);

        return this as RouteObject;
    };
}