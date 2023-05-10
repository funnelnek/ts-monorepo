import { Callee, ChattyApplicationState } from "@funnelnek/chatty/core";
import { codeChanged } from "@funnelnek/chatty/store";
import type { Store } from "redux";
import { ChangeEvent } from "react";

export class ChatCallee implements Callee {
    private _id!: string;

    constructor(private store: Store<ChattyApplicationState>) {
    }

    get id(): string {
        return this._id;
    }

    onCodeChange(event: ChangeEvent<HTMLInputElement>): void {
        let el = event.target;
        let code = el.value;
        let action = codeChanged(code);
        
        this.store.dispatch(action);
    }

}