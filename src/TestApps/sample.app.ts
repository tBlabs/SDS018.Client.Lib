import { Sensor } from "../Sensor/Sensor";
import { SDS018SocketConnector } from "../Connectors/SDS018SocketConnector";
import { ISensorConnector } from "../Connectors/ISensorConnector";

const connectionString = "http://localhost:3005";
// const connectionString = "http://192.168.1.100:3005";
const sensorConnector = new SDS018SocketConnector(connectionString);
const sensor = new Sensor(sensorConnector);

console.log('pm25', sensor.Pm25);
console.log('pm10', sensor.Pm10);

sensor.OnChange((pm25, pm10) =>
{
    console.log('pm25:', (pm25/10).toFixed(1),'| pm10:', (pm10/10).toFixed(1));
});
