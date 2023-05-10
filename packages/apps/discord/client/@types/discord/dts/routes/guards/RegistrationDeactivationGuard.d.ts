import { ActivatedRouteSnapshot, CanDeactivate, Guardian, NavigationSnapshot, RouteIncomingSnapshot, RouterStateSnapshot } from "@funnelnek/router";
import { LoginPage, RegistrationPage } from "@funnelnek/discord-theme";
import { Observable } from "rxjs";
export declare class RegistrationDeactivationGuard implements CanDeactivate<RegistrationPage>, Guardian {
    canDeactivate(component: LoginPage, route: ActivatedRouteSnapshot, router: RouterStateSnapshot, next: NavigationSnapshot): Observable<boolean>;
    can(request: RouteIncomingSnapshot): boolean | Observable<boolean> | Promise<boolean>;
}
