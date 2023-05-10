import React from "react";
import { Outlet } from "react-router";


export const Stage = () => {
    return (
        <div id="stage">
            <Outlet />
        </div>
    );
}