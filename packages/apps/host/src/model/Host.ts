import { AggregateRoot, HostApplication, HostGateway } from "@funnelnek/core";
import { Router } from "@funnelnek/router";
import "../routes";


@HostGateway()
export class Host extends HostApplication {    
    constructor(aggregate: AggregateRoot, router: Router) {
        super(aggregate, router);
    }
}