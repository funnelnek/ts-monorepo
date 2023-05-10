import React from "react";
import { Conferencer } from "./components/conferencer/Conferencer";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Messenger } from "./components/messenger/Messenger";
import { SocketContext } from "@funnelnek/socket-core";
import { useChatty } from "./hooks";
import "./scss/styles.scss";


export const App = (props: any): JSX.Element => {   
    const chatty = useChatty();

    return (
        <SocketContext.Provider value={chatty.socket}>
            <div id="chatty">
                <Dashboard />
                <Conferencer />
                <Messenger />
            </div>
        </SocketContext.Provider>
    );
};

export default App;