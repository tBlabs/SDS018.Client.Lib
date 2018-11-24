export interface ISensorConnector
{
    OnUpdate: (pm10: number, pm25: number) => void;
    Disconnect(): void;
}
