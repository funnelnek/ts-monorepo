import { CalendarMonth } from "../constants/month";

export type CalendarMonthCode = Capitalize<Lowercase<keyof typeof CalendarMonth>>;
