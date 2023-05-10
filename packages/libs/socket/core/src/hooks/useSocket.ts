import { Socket } from "socket.io-client";
import { useContext } from "react";
import { SocketContext } from "../context";

export const useSocket = (): Socket => {
    return useContext(SocketContext);
}