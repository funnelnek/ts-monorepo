import React, { FC } from "react";
import { Image } from "@funnelnek/ui";
import { LogoProps } from "./contracts/LogoProps";


export const Logo: FC<any> = ({url, name}: LogoProps): JSX.Element => {
    return (
        <Image src={url} alt={name} />
    );
}