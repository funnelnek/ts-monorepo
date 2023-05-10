import { InjectionToken } from "@funnelnek/ioc";
import { Epic } from 'redux-observable';


export const SAGAS = new InjectionToken<Epic[]>([]);