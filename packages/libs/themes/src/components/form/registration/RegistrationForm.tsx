import React, { FC } from "react";
import { TextField } from "../control";
import ui from "./registration-form.module.scss";

export const RegistrationForm: FC<any> = (props: any): JSX.Element => {
    return (
        <form id="registration" action="" className={ui.registration}>
            <header>
                <h1>Registration</h1>
            </header>
            <div className={ui["personal-info"]}>
                <div className="info">
                    <h2 className={ui.title}>Personal Information</h2>
                    <div className={ui.fieldset}>
                        <TextField variant="outlined" label="Full Name" placeholder="Enter your name" />
                        <TextField variant="outlined" type="date" label="Date of Birth" placeholder="Enter date of birth" />
                        <TextField variant="outlined" label="Email" placeholder="Enter your email" />                        
                    </div>
                </div>
            </div>
        </form>
    );
}