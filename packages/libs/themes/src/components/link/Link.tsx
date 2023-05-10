import React, { FC } from "react";
import cx from "react-classset";
import { LinkProps, Link as RouterLink } from "react-router-dom";

export const Link: FC<LinkProps> = ({ children, className, ...props}: LinkProps): JSX.Element => {
    const cls = cx("link", className);

    return (
        <RouterLink className={cls} {...props}>{ children }</RouterLink>
    );
}