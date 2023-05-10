import React from "react";
import { Button, Icon } from "@funnelnek/ui";
import { useChannelConnector } from "../../hooks/useChannelConnector";

export const ChannelConnector = (props: any): JSX.Element => {
    const connector = useChannelConnector();

    return (
        <div id="channel-connector">
            <Button data-type="chat" clasName="connecting-button" onClick={connector}>
                <Icon icon="chat" />
                <label htmlFor="connection-id">Chat</label>
            </Button>
            <Button data-type="video" clasName="connecting-button" onClick={connector}>
                <Icon icon="video-camera" />
                <label htmlFor="connection-id">Video</label>
            </Button>
        </div>
    );
}