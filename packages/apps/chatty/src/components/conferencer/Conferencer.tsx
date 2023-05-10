import React from "react"
import { ConferenceController } from "../conference-controller";
import { ConferenceScreen } from "../conference-screen";
import { VideoPreview } from "../video-preview";

export const Conferencer = (props: any): JSX.Element => {
    return (
        <div id="conferencer">
            <VideoPreview></VideoPreview>
            <ConferenceScreen></ConferenceScreen>
            <ConferenceController />
        </div>
    );
}