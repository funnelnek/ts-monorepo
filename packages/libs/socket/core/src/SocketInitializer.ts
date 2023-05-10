import { io, Socket, SocketOptions } from "socket.io-client";
import { SocketMonitor } from "./contracts";
import { WebSocketMonitor } from "./WebSocketMonitor";


export class SocketInitializer {
    private _socket: Socket;

    constructor(url: string = "http://localhost/chatty", options?: SocketOptions) {
        this._socket = io(url, options);
    }

    init(): SocketMonitor {
        return new WebSocketMonitor(this.socket);
    }

    get socket(): Socket {
        return this._socket;
    }

    get id(): string {
        return this._socket.id;
    }

}