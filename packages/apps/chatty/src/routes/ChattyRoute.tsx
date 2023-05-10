import React from "react";
import { lazy, ReactNode } from "react";
import { LoaderFunctionArgs } from "react-router";
import type { Store } from "redux";
import { SocketInitializer } from "@funnelnek/socket";
import { Routing, Route, Router, ShouldRevalidateArgs } from "@funnelnek/router";
import { Scene } from "@funnelnek/ui";
import { HttpClient } from "@funnelnek/http";
import { ChattyApplicationState } from "@funnelnek/chatty-core";

const ChattyApp = lazy(() => import("../App"));


@Route()
export class ChatyRoute implements Routing {
    readonly id: string = "chatty";
    readonly path: string = "/chatty";

    constructor(
        private router: Router, 
        private store: Store<ChattyApplicationState>,
        private http: HttpClient
    ) {
    }

    get element(): ReactNode {
        return <Scene component={ChattyApp} />
    }

    async loader({ params, request }: LoaderFunctionArgs): Promise<any> {        
        return;
    }

    shouldRevalidate(context: ShouldRevalidateArgs): boolean {

        return true;
    };
}