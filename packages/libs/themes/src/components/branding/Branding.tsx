import React, { createContext, FC } from "react";
import { BrandingProps } from "./contracts";
import { IBranding } from "./contracts/IBranding";

export const BrandingContext = createContext<IBranding>(undefined!);
export const Branding: FC<BrandingProps> = ({ name, children }: BrandingProps): JSX.Element => {

    return (
        <div className="branding">
            { children && <span className="logo">{ children }</span> }
            { name && <span className="name">{ name }</span> }
        </div>
    );
}