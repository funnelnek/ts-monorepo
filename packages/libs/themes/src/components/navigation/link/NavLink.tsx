import React, { FC } from "react";
import cx from "react-classset";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { Icon } from "../../icon";
import { MenuItem } from "../../menu";

export const NavLink: FC<NavLinkProps> = ({ children, className, ...props }: NavLinkProps): JSX.Element => {
    
    if (typeof children === "string") {

    }
    
    let cls = cx("nav-link", className);

    return (
        <MenuItem className={cls}>
            <RouterNavLink {...props}>{ children }</RouterNavLink>
        </MenuItem>
    );
}