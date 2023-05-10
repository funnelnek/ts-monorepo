import React, { FC } from "react"

export const Timeline: FC<any> = (props: any): JSX.Element => {
    return (
        <div className="timeline">
            <div className="line"></div>
            <div className="section">
                <div className="bead"></div>
                <div className="content">
                    <header className="heading"></header>
                    <p className="body"></p>
                </div>
            </div>
        </div>
    );
}