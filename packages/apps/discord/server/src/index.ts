import { NestExpressApplication } from "@nestjs/platform-express";
import { bootstrap } from "./main";

export const server: Promise<NestExpressApplication> = bootstrap();