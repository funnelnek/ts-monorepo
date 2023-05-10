import { Controller, Get } from "@nestjs/common";


@Controller("/api/v1")
export class ChatController {
    
    @Get("/messages")
    resolveNamespace(): void {

    }
}