import React, { FC } from "react";
import { DrawerProps } from "./contracts";
import styles from "./drawer.module.scss";
import cx from "react-classset";


export const Drawer: FC<DrawerProps> = ({ minimize, open, children, className }: DrawerProps): JSX.Element => {
    const cls = cx({
        open,
        minimize,
        drawer: true
    }, className);

    return (
        <div className={cls}>
            { children }
        </div>
    );
}