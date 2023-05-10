import { useStore } from "react-redux";
import { useLoaderData } from "react-router";
import { useInjector } from "@funnelnek/ioc";
import { Chatty } from "../model/Chatty";
import { ChattyApp } from "@funnelnek/chatty/core";


export const useChatty = (): ChattyApp => {
    const store = useStore();
    const data = useLoaderData();
    const injector = useInjector();
    const chatty = injector.get(Chatty);

    chatty.init(data, store);
    return chatty;
}