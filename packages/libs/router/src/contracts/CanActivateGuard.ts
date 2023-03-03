import { CanActivateFn } from "../types/CanActivateFn";

export interface CanActivateGuard {
    canActivate: CanActivateFn;
}