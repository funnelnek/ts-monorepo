import React, { FC } from "react"

export const PaginationItem: FC<any> = ({ page, onSelect } : any): JSX.Element => {
    return (
        <li onClick={onSelect}>{ page }</li>
    );
}