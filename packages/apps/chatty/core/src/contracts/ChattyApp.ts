import { Store } from "redux";
import { Socket } from "socket.io-client";

export interface ChattyApp {
    init(data: any, store: Store): void;
    socket: Socket;
}