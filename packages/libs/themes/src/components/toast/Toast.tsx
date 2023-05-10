import React, { FC } from "react";
import { Icon } from "../icon";


export const Toast: FC<any> = (props: any): JSX.Element => {
    let { children, status, icon } = props;

    return (
        <div className="toast">
            <div className="content">
                <div className="toast-icon">
                    <Icon name={icon} />
                </div>
                <div className="toast-message">
                    <span className="status">{ status }</span>
                    <span className="message">{ children }</span>
                </div>
            </div>
            <div className="close">
                <Icon name="close" />
            </div>
            <div className="progress"></div>
        </div>
    );
}