import React, { FC } from "react"
import { Icon } from "../../icon"
import { Button } from "../Button"
import { CopyButtonProps } from "../contracts/CopyButtonProps";


export const CopyButton: FC<CopyButtonProps> = ({ data }: CopyButtonProps): JSX.Element => {

    function copy() {
        navigator.clipboard && navigator.clipboard.writeText(data);
    }

    return (
        <Button onPointerUp={copy}>
           
        </Button>
    );
}