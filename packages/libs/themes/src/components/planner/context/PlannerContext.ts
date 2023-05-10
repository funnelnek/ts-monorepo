import { createContext } from "react";
import { IPlanner } from "../contracts/IPlanner";

export const PlannerContext = createContext<IPlanner>(undefined!);