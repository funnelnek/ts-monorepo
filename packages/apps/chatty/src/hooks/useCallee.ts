import { Callee, ChatCallee, ChattyApplicationState } from "@funnelnek/chatty/core";
import { useStore } from "react-redux";

export const useCallee = (): Callee => {
    const store = useStore<ChattyApplicationState>();
    const callee = new ChatCallee(store);

    return callee;
}