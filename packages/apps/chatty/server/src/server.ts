import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DataTransferValidator } from "@funnelnek/common";
import { ChattyServerModule } from "./server.module";

export const bootstrap = async (): Promise<INestApplication> => {
    const app = await NestFactory.create(ChattyServerModule);

    app.useGlobalPipes(...DataTransferValidator);
    app.listen(3000);
    return app;
}