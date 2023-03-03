import { CanActivateGuard } from "../contracts/CanActivateGuard";
import { CanActivateFn } from "./CanActivateFn";


export type CanActivateHandler = CanActivateFn | CanActivateGuard;