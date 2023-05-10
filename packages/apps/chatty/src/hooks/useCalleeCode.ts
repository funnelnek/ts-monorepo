import { useSelector } from "react-redux";
import { getCalleeCode } from "@funnelnek/chatty/store";

export const useCalleeCode = (): string => {
    return useSelector(getCalleeCode);
}