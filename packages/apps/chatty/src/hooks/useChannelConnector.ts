import { useSocket } from "@funnelnek/socket";
import { useCalleeCode } from "./useCalleeCode"


export const useChannelConnector = () => {
    const code = useCalleeCode();
    const socket = useSocket();

    return (event: MouseEvent): void => {
        let button = event.target as HTMLButtonElement;
        let type = button.dataset.type;
        let data = { type, code };

        socket?.emit("pre-offer", data, (res: any) => {

        });
    }
}