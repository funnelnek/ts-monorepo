
export interface SocketMonitor {
    id: string;
    connected: boolean;
    disconnected: boolean;
    on(event: string, fn: (...args: any[]) => void): void;
    off(event: string, fn: (...args: any[]) => void): void;
}