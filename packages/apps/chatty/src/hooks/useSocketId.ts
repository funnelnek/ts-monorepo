import { useSelector } from "react-redux";
import { getSocketId } from "../../store/src/selectors";

export const useSocketId = (): string | undefined => {
    return useSelector(getSocketId);
}