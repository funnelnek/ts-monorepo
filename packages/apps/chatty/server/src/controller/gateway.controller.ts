import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from "@nestjs/websockets";
import { Server } from "socket.io";
import { Socket } from "socket.io-client";
import { SocketGatewayConfiguration } from "../config/ChattyServerConfiguration";
import { ChatService } from "../service/ChatService";


@WebSocketGateway(SocketGatewayConfiguration)
export class ChattySocketGateway implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect {
    private server!: Server;

    constructor(private service: ChatService) {
    }

    afterInit(server: Server) {
        this.server = server;
    }

    handleDisconnect(client: Socket) {
        throw new Error("Method not implemented.");
    }

    handleConnection(client: Socket, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
}