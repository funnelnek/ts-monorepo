import { ActivatedRouteSnapshot, CanDeactivate, Guardian, NavigationSnapshot, RouteIncomingSnapshot, RouterStateSnapshot } from "@funnelnek/router";
import { LoginPage, RegistrationPage } from "@funnelnek/discord-theme";
import { Observable, of } from "rxjs";

export class RegistrationDeactivationGuard implements CanDeactivate<RegistrationPage>, Guardian {
    canDeactivate(component: LoginPage, route: ActivatedRouteSnapshot, router: RouterStateSnapshot, next: NavigationSnapshot): Observable<boolean> {
        return of(true);
    }
    
    can(request: RouteIncomingSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}