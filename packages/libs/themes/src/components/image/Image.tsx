import React, { FC } from "react";
import { ImageProps } from "./contracts/ImageProps";


export const Image: FC<ImageProps> = ({ lazy, ...props }: ImageProps): JSX.Element => {
    return (
        <img {...props} />
    );
}