import React from "react";
import { TextField } from "@funnelnek/ui";
import { useCallee } from "../../hooks";

export const ChannelCode = (): JSX.Element => {
    const callee = useCallee();

    return (
        <div id="channel-code">
            <TextField className="channel-id-field" name="channel-id" onChange={callee.onCodeChange} />
        </div>
    );
}