import React from "react"
import { Logo } from "../logo/Logo";
import { SocketInfo } from "../socket-info/SocketInfo";
import { ChannelCode } from "../channel-code/ChannelCode";
import { ChannelConnector } from "../channel-connector/ChannelConnector";

export const Dashboard = (props: any): JSX.Element => {
    return (
        <div id="dashboard">
            <Logo url="http://localhost:6000/assets/img/logo.png" name="Meeting the Strangers" />        
            <SocketInfo />
            <ChannelCode />
            <ChannelConnector />
        </div>
    );
}

export default Dashboard;