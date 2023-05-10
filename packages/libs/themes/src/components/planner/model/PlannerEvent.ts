import { IPlannerEvent } from "../contracts";


export class PlannerEvent implements IPlannerEvent {
    static create(): IPlannerEvent {
        return {} as IPlannerEvent;
    }
    
    constructor() {}
}