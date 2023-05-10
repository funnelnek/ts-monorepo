import { SetMetadata } from "@nestjs/common";
import { ACCESSIBLE } from "../constants";

export const Allow = () => SetMetadata(ACCESSIBLE, true);