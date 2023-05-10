import { LoginPage } from "@funnelnek/discord-theme";
import { ActivatedRouteSnapshot, CanDeactivate, Guardian, NavigationSnapshot, RouteIncomingSnapshot, RouterStateSnapshot } from "@funnelnek/router";
import { Observable } from "rxjs";
export declare class LoginDeactivationGuard implements CanDeactivate<LoginPage>, Guardian {
    canDeactivate(component: LoginPage, route: ActivatedRouteSnapshot, router: RouterStateSnapshot, next: NavigationSnapshot): Observable<boolean>;
    can(request: RouteIncomingSnapshot): boolean | Observable<boolean> | Promise<boolean>;
}
