import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@funnelnek/router";
export declare class DiscordActivateGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Promise<any>;
}
