import React, { FC, useContext } from "react"
import { CalendarContext } from "../calendar/context/CalendarContext";

export const ToDo: FC<any> = (props: any): JSX.Element => {
    const calendar = useContext(CalendarContext);

    return (
        <div className="todo">
            
        </div>
    );
}