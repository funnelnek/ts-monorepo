import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@funnelnek/router";

export class DiscordActivateGuard implements CanActivate {
    async canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Promise<any> {
        return true;
    }
}