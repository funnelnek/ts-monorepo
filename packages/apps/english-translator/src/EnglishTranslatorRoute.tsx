import React from "react";
import { ReactNode } from "react";
import { Route, Routing } from "@funnelnek/router";
import { Scene } from "@funnelnek/ui";
import { EnglishTranslatorApplication } from "./main";


@Route()
export class EnglishTranslatorRoute implements Routing {
    get element(): ReactNode {        
        return <Scene component={EnglishTranslatorApplication} />
    }
}