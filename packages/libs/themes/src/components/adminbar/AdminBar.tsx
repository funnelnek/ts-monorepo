import React from "react";
import { CurrentAdminUser } from "../active-admin-user";
import { Drawer } from "../drawer";
import { AdminNavigation } from "./navigation/AdminNavigation";
import "./admin-bar.scss";


export const AdminBar = (props: any): JSX.Element => {
    return (
        <Drawer>
            <CurrentAdminUser />
            <AdminNavigation />
            <div id="app-version-info">
                <p className="app-version">1.0.0</p>
            </div>
        </Drawer>
    );
}