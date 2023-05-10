import React, { ReactNode } from "react"

export const PaneHeader = ({ children }: { children: ReactNode }) => {
    return (
        <div className="pane-header">
            { children }
        </div>
    );
}