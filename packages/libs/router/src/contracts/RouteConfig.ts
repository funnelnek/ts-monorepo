import { CanActivateHandler } from "../types/CanActivateHandler";


export interface RouteConfig {
    lazy?: boolean;
    canActivate?: CanActivateHandler[];
}