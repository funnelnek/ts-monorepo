import { createContext } from "react";
import { ICalendar } from "../contracts";


export const CalendarContext = createContext<ICalendar>(undefined!);