import React from "react"
import cx from "react-classset";
import { IconProps } from "./contracts";

export const Icon = (props: IconProps): JSX.Element => {
    let { 
        name, 
        variant = "regular",
        prefix = "fa", 
        size = "xs", 
        color = "primary" 
    } = props;

    const cls = cx(
        "icon",
        color, 
        `${prefix}-${variant}`, 
        `${prefix}-${name}`, 
        size !== "xs" ? `${prefix}-${size}` : undefined
    );


    return (
        <i className={cls}></i>
    );
}