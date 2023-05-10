import { CalleeState } from "./CalleeState";

export interface ChattyApplicationState {
    id?: string;
    callee?: CalleeState;
    local?: any;
    remote?: any;
    sharing?: any;
    isSharing?: boolean;
    telcom?: any;
}