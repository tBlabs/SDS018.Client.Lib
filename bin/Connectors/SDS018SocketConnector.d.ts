import { ISensorConnector } from "./ISensorConnector";
export declare class SDS018SocketConnector implements ISensorConnector {
    private socket;
    OnUpdate: (pm10: number, pm25: number) => void;
    constructor(connectionString: string);
    Disconnect(): void;
}
