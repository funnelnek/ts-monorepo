import React from "react"
import { FC } from "react"
import cx from "react-classset";
import { MenuItemProps } from "../contracts";


export const MenuItem: FC<MenuItemProps> = ({ children, className, ...props}: MenuItemProps): JSX.Element => {
    const cls = cx("menu-item", className);

    return (
        <li className={cls} {...props}>{ children }</li>
    );
}