import React from "react"
import { Branding } from "../../branding/Branding"
import { Drawer } from "../../drawer/Drawer"

export const SideBarLayout = (props: any): JSX.Element => {
    return (
        <div className="layout-sidebar">
            <Drawer>
                <Branding>
                    
                </Branding>
            </Drawer>
            <div>

            </div>
        </div>
    )
}