import React, { FC } from "react";
import { useSiteNavigation } from "./hooks/useSiteNavigation";
import { Navigation } from "./Navigation";


export const SiteNavigation: FC<any> = (props: any) => {
    const navigation = useSiteNavigation(props);
    
    return (
        <Navigation></Navigation>
    );
}