import { Socket } from "socket.io-client";
import { SocketMonitor } from "./contracts/SocketMonitor";


export class WebSocketMonitor implements SocketMonitor {    
    private eventHandlers: Map<string, Function[]> = new Map<string, Function[]>();

    constructor(private socket: Socket) {     
        const manager = socket.io;

        socket.on("connect", this.onConnection.bind(this));
        socket.on("disconnect", this.onDisconnect.bind(this));
        socket.on("connect_error",this.onConnectError.bind(this));
        manager.on("reconnect_attempt", this.onReconnectAttempt.bind(this));
        manager.on("reconnect_failed", this.onReconnectFailed.bind(this));
        manager.on("reconnect", this.onReconnect.bind(this));   
        manager.on("reconnect_error", this.onReconnectError.bind(this));   
        manager.on("error", this.onError.bind(this));
    }

    get id(): string {
        return this.socket.id;
    }

    get connected(): boolean {
        return this.socket.connected;
    }

    get disconnected(): boolean {
        return this.socket.disconnected;
    }

    on(event: string, fn: (...args: any[]) => void): void {
        if (this.eventHandlers.has(event)) {
            this.eventHandlers.get(event)?.push(fn);
            return;
        }

        this.eventHandlers.set(event, [fn]);
    }

    off(event: string, fn: (...args: any[]) => void): void {
        if (!this.eventHandlers.has(event)) {
            return;
        }

        let handlers = this.eventHandlers.get(event);

        if (!handlers) {
            return;
        }

        handlers = handlers.filter(handler => handler !== fn);

        this.eventHandlers.set(event, handlers);
    }

    private onConnectError(): void {
        throw new Error("Method not implemented.");
    }

    private onReconnectFailed(): void {
        throw new Error("Method not implemented.");
    }

    private onError(): void {
        throw new Error("Method not implemented.");
    }

    private onReconnectError(): void {
        throw new Error("Method not implemented.");
    }  
    
    private onConnection(): void {
        this.setLocalStorage();
    }

    private onDisconnect(): void {
        throw new Error("Method not implemented.");
    }

    private onReconnect(): void {
        this.setLocalStorage();
    }

    private onReconnectAttempt(): void {
        
    }

    private setLocalStorage() {
        window.localStorage.setItem("socketId", this.socket.id);
    }
}