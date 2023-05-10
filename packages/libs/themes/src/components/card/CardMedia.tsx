import React, { ReactElement, useContext } from "react";
import { FC } from "react";
import { Image } from "../image";
import { CardContext } from "./context";


export const CardMedia: FC<void> = (): JSX.Element => {
    let Component!: ReactElement;
    const { media } = useContext(CardContext);

    if (typeof media === "string") {
        let isImage = !media.endsWith(".mov") || !media.endsWith(".mp3");
        Component = <Image src={media} />
    }

    return (
        <figure className="card-media">
            { Component }
        </figure>
    );
}