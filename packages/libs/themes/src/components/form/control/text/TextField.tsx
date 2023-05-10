import React, { forwardRef, ForwardRefExoticComponent, Ref, RefAttributes } from "react";
import cx from "react-classset";
import { TextFieldProps } from "./contracts";


export const TextField: ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & RefAttributes<HTMLInputElement>> = forwardRef((props: TextFieldProps, ref: Ref<HTMLInputElement>): JSX.Element => {
    let { 
        id, 
        label, 
        autoComplete = "off",
        variant = "standard",
        placeholder = " ", 
        startAdornment,
        endAdornment,
        helperText,
        className,
        ...input 
    } = props;


    const inputClass = cx(
        variant,
        className,
        "form-control"
    );

    return (
        <div className={cx("field")}>
            <div className={cx("control")}>
                { startAdornment && <span className="adornment">{ startAdornment }</span> }
                <input ref={ref} className={inputClass} {...input} />
                { endAdornment && <span className="adornment">{ endAdornment }</span> }
                <label className={cx("label")} htmlFor={id}>{ label }</label>
                { variant !== "outlined" && <div className={cx("border")} /> }            
            </div>
            <div className="assistance">
                { helperText && <span className="helper">{ helperText }</span> }
            </div>
        </div>
    );
});

export default TextField;