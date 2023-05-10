import { Module } from "@nestjs/common";
import { ChatController } from "./controller/chat.controller";
import { VideoChatController } from "./controller/video.controller";


@Module({
    controllers: [
        ChatController,
        VideoChatController
    ]
})
export class ChattyServerModule {
}