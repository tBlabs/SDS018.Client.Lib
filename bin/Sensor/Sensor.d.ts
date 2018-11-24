import { ISensorConnector } from "../Connectors/ISensorConnector";
export declare class Sensor {
    private pm10;
    private pm25;
    private onChangeCallback;
    readonly Pm10: number;
    readonly Pm25: number;
    OnChange(callback: (pm10: number, pm25: number) => void): void;
    constructor(connector: ISensorConnector);
}
