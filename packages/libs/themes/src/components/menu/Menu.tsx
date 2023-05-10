import React, { FC } from "react"
import cx from "react-classset";
import { MenuProps } from "./contracts";

export const Menu: FC<MenuProps> = ({children, className, ...props}: MenuProps): JSX.Element => {
    const cls = cx("menu", className);
    
    return (
        <menu className={cls} {...props}>{ children }</menu>
    );
}