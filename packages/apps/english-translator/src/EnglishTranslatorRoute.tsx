import React from "react";
import { ReactNode } from "react";
import { Route, Routing } from "@funnelnek/router";
import { Scene } from "@funnelnek/ui";
import { EnglishTranslatorApplication } from "./main";


@Route({lazy: true})
export class EnglishTranslatorRoute implements Routing {
    readonly id: string = "english-translator";
    readonly path: string = "";

    constructor(private _children: Routing[]) {
    }

    get children(): ReactNode[] {
        return this._children.map(route => route.element);
    }

    get element(): ReactNode {        
        return (
            <Scene component={EnglishTranslatorApplication}>                
            </Scene>
        );
    }
}