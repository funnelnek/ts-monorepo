import { HTMLProps, ForwardedRef } from "react";
import { ICalendar } from "./ICalendar";
export interface CalendarProps extends HTMLProps<HTMLDivElement> {
    calendarRef?: ForwardedRef<ICalendar | undefined>;
    calendar?: ICalendar;
}
