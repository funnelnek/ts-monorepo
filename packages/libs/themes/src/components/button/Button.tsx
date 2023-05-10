import React from "react"
import cx from "react-classset";
import { ButtonProps } from "./contracts/ButtonProps";


export const Button = (props: ButtonProps) => {
    let { children, variant, color, type = "button", ...other } = props;

    const cls = cx(variant, color);

    return (
        <button type={type} className={cls} {...other}>
            { children }
        </button>
    );
}