import { InjectionToken } from "@funnelnek/ioc";
import { AnnotatedAggregate } from "../contracts/AnnotatedAggregate";

export const AGGREGATES = new InjectionToken<AnnotatedAggregate[]>([], true);