import { Middleware } from "redux";
import { Epic } from 'redux-observable';
import { Enumerable } from "@funnelnek/common";
import { AggregateRoot, AGGREGATES, AnnotatedAggregate, SAGAS } from "@funnelnek/core";
import { Inject, Injectable } from "@funnelnek/ioc";



@Injectable({ alias: AggregateRoot })
export class HostAggregate extends AggregateRoot {
    

    constructor(@Inject(AGGREGATES) aggregates: AnnotatedAggregate[], @Inject(SAGAS) sagas: Epic[]) {
        super(aggregates, sagas);
    }

    get preloadedState(): Enumerable {
        return {

        };
    }

    get middleware(): Middleware[] {
        return [this.saga];
    }
}