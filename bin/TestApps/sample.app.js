"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sensor_1 = require("../Sensor/Sensor");
const SDS018SocketConnector_1 = require("../Connectors/SDS018SocketConnector");
// const connectionString = "http://localhost:3000";
const connectionString = "http://192.168.1.100:3005";
const sensorConnector = new SDS018SocketConnector_1.SDS018SocketConnector(connectionString);
const sensor = new Sensor_1.Sensor(sensorConnector);
console.log('pm10', sensor.Pm10);
sensor.OnChange((pm25, pm10) => {
    console.log('pm10:', pm10);
});
//# sourceMappingURL=sample.app.js.map