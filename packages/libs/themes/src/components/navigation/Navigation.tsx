import React, { FC } from "react";
import cx from "react-classset";
import { Menu } from "../menu";
import { NavigationProps } from "./contracts";
import { useNavigation } from "./hooks/useNavigation";


export const Navigation: FC<NavigationProps> = ({ children, className }: NavigationProps): JSX.Element => {
    const navigation = useNavigation({});
    const cls = cx("navigation", className);

    return (
        <nav className={cls}>
            <Menu>{ children }</Menu>
        </nav>
    );
}