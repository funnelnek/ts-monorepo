import React, { FC } from "react"
import { DiscordLoginForm, LoginHeader } from "../components/forms/login";

export const DiscordLoginPage: FC<any> = (): JSX.Element => {
    return (
        <div>
            <div className="container">
                <LoginHeader />
                <DiscordLoginForm />
            </div>
        </div>
    );
}