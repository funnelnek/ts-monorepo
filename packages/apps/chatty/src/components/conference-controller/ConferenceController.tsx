import React from "react"
import { CallButton } from "../call-button/CallButton";
import { MicAudioButton } from "../mic-audio-button/MicAudioButton";
import { ScreenShareButton } from "../screen-share-button/ScreenShareButton";
import { CameraButton } from "../camera-button/CameraButton";
import { RecordButton } from "../record-button/RecordButton";

export const ConferenceController = (props: any): JSX.Element => {
    return (
        <div id="conference-controller">
            <MicAudioButton />
            <CameraButton />
            <CallButton />
            <ScreenShareButton />
            <RecordButton />
        </div>
    );
}