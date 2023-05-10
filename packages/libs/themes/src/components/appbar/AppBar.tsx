import React, { FC } from "react";
import { Avatar } from "../avatar/Avatar";
import { Button } from "../button";


export const AppBar: FC<any> = (props: any): JSX.Element => {
    return (
        <div className="appbar">
            <div className="info">
                <Avatar />
                <div className="details">
                    <h4 className="name">{}</h4>
                    <p className="title">{}</p>
                </div>
            </div>
            <div className="toggle-button">
                <Button></Button>
            </div>
        </div>
    );
}