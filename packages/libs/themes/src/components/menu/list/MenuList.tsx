import React, { FC } from "react"
import { MenuListProps } from "../contracts"

export const MenuList: FC<MenuListProps> = (props: MenuListProps): JSX.Element => {
    let {
        children
    } = props;

    return (
        <menu>{ children }</menu>
    );
}