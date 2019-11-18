import { ISensorConnector } from "../Connectors/ISensorConnector";

export class Sensor
{
    private pm10: number = (-1);
    private pm25: number = (-1);
    private onChangeCallback: (pm10: number, pm25: number) => void = () => {};

    public get Pm10(): number
    {
        return this.pm10;
    }

    public get Pm25(): number
    {
        return this.pm25;
    }

    public OnChange(callback: (pm10: number, pm25: number) => void): void
    {
        this.onChangeCallback = callback;
    }

    constructor(connector: ISensorConnector)
    {
        connector.OnUpdate = (pm10: number, pm25: number) =>
        {
            this.pm10 = pm10;
            this.pm25 = pm25;

            this.onChangeCallback(pm10, pm25);
        };
    }
}
