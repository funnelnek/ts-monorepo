import React, { FC } from "react";
import { Button } from "../button";
import { Icon } from "../icon";
import { PaginationProps } from "./contracts";


export const Pagination: FC<PaginationProps> = (props: PaginationProps): JSX.Element => {
    let {
        count = 5,
        icons,
        disabled = false,
        variant,
        rounded,
        color = "primary",
        onPageChange
    } = props;

    function onChange() {
        
    }

    for (let i = 1; i < count; i++) {

    }
    return (
        <nav className="pagination">
            <Button>
                <Icon variant="solid" name="chevrons-left"></Icon>                
            </Button>
            <Button>
                <Icon variant="solid" name="chevron-left"></Icon>                
            </Button>
            <ol className="links">
                { }
            </ol>
            <Button>
                <Icon variant="solid" name="chevron-right"></Icon>                
            </Button>
            <Button>
                <Icon variant="solid" name="chevrons-right"></Icon>                
            </Button>
        </nav>
    );
}