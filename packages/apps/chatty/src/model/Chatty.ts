import { ChattyApp } from "@funnelnek/chatty/core";
import { SocketInitializer, SocketMonitor } from "@funnelnek/socket";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Store } from "redux";
import { Socket } from "socket.io-client";

export class Chatty implements ChattyApp {
    private _socket!: Socket;
    private _monitor!: SocketMonitor;
    private _store!: Store;

    constructor() {
    }

    get socket(): Socket<DefaultEventsMap, DefaultEventsMap> {
        return this._socket;
    }

    init(data: any, store: Store): void {
        this._store = store;
        let initializer = new SocketInitializer();
        let monitor = this._monitor = initializer.init();
        let socket = this._socket = initializer.socket;
    }
}