import React, { FC, useContext } from "react";
import { Button } from "../button";
import { TextField } from "../form";
import { CalendarContext } from "./context/CalendarContext";

export const CalendarMonth: FC<any> = ({ children }: any): JSX.Element => {
    const calendar = useContext(CalendarContext);
    
    return (
        <div className="monthly-view">
            <div className="weekdays">
                <div className="weekday">Sun</div>
                <div className="weekday">Mon</div>
                <div className="weekday">Tue</div>
                <div className="weekday">Wed</div>
                <div className="weekday">Thu</div>
                <div className="weekday">Fri</div>
                <div className="weekday">Sat</div>
            </div>
            <div className="days">{ children }</div>
            <div className="goto-date">
                <div className="date-picker">
                    <TextField onChange={calendar.onGoToChange} variant="outlined" />
                    <Button onClick={calendar.onGoTo}>Go</Button>
                </div>
                <div className="today">
                    <Button onClick={calendar.today} variant="outlined">Today</Button>
                </div>
            </div>
        </div>
    );
}