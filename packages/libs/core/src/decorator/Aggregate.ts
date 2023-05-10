import { Injectable, Type } from "@funnelnek/ioc"
import { AGGREGATES } from "../constants";
import { IAggregate } from "../contracts"


export const Aggregate = () => {
    return (type: Type<IAggregate>) => {
        Injectable({
            multi: true,
            provides: AGGREGATES
        })(type);
    }
}