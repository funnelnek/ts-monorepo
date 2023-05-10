import React, { FC } from "react"
import { AvatarProps } from "./contracts"


export const Avatar: FC<any> = (props: AvatarProps): JSX.Element => {
    return (
        <figure className="avatar">
            <img src="" alt="" />
        </figure>
    );
}