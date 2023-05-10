import React, { FC } from "react";
import { CopyButton } from "@funnelnek/ui";
import { useSocketId } from "@funnelnek/chatty-store";


export const SocketInfo: FC<any> = (): JSX.Element => {
    let socketId = useSocketId();

    return (
        <div id="socket-info">
            <p className="description">Talk with other user by entering their personal code.</p>
            <div className="widget-info">
                <p className="title">Your Personal Code:</p>                
                <div className="code-display">
                    <p className="code">{ socketId }</p>
                    <CopyButton data={socketId} />
                </div>
            </div>
        </div>
    );
}
export default SocketInfo;