import React from "react";

export const Checkbox = ({name, id, label}: any) => {
    return (
        <div className="field">
            <input className="form-control" type="checkbox" name={name} id={id} />
            <label htmlFor={id}>{ label }</label>
        </div>
    );
}