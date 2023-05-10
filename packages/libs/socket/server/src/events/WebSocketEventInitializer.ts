import { Socket } from "socket.io";

export class WebSocketEventInitializer {
    private events: Map<string, any> = new Map();

    constructor(private socket: Socket) {
    }

    async init(): Promise<Socket> {
        for(let [event, handler] of this.events) {
            this.socket.on(event, handler);
        }

        return this.socket;
    }
}