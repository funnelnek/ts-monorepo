import React, { FC } from "react"
import { ListProps } from "./contracts"

export const List: FC<ListProps> = (props: ListProps): JSX.Element => {
    let { ordered } = props;
    
    return (
        <>
            { ordered ? (
                <ol>

                </ol>
            ) : (
                <ul>

                </ul>
            )}
        </>
    );
}