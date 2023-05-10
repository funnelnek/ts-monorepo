import React, { FC } from "react";
import { Button } from "../../button";
import { TextField } from "../control/text";


export const SignUpForm: FC<any> = ({ title }: any): JSX.Element => {
    return (
        <form action="">
            <h1 className="title">{ title }</h1>
            <div className="fieldset">
                <TextField label="Email" placeholder="Enter Email"></TextField>
                <TextField label="Password" type="password" placeholder="Enter Password"></TextField>
            </div>
            <div className="action-area">
                <Button>Sign-up</Button>
            </div>
        </form>
    );
}