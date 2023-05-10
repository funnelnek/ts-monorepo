import { ExecutionContext } from "@nestjs/common";
import { APP_GUARD, Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { ACCESSIBLE } from "../constants";


export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isAccessible = this.reflector.getAllAndOverride<boolean>(ACCESSIBLE, [
          context.getHandler(),
          context.getClass(),
        ]);

        if (isAccessible) {
          return true;
        }

        return super.canActivate(context);
    }
}

export const JwtAuthGuardProvider = {
    provide: APP_GUARD,
    useClass: JwtAuthGuard
}