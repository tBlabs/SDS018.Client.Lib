TODO
- all events callbacks should be streams or events emitters/Rx cause now we can attach only one action to each event
- remove RTC?
- remove `/bin` from import (copy bin files level up during publishing?)

# SDS018.Client.Lib

This is a client for a **SDS018 Air quality sensor** in a form of library.  
It is distributed as a node package with TypeScript types definitions.  
Socket connector included.

## Install

`npm i sds018-client-lib`

## Development

`npm run serve` is not working. Use `tsc ; npm start` instead;

## Import

`import { SDS018Sensor, SDS018SocketConnector} from 'sds018-client-lib/bin';` // TODO: remove `/bin`

## Usage

```
const connectionString = "http://192.168.1.100:3005";
const sensorConnector = new SDS018SocketConnector(connectionString);
const sensor = new Sensor(sensorConnector);

sensor.OnChange((pm25, pm10) =>
{
    console.log('pm10:', pm10);
});
```

# Connectors

Connector is a class implementing `ISensorConnector` interface.  
It's destiny is communication with sensor host (daemon) located somewhere in the network.

## How to run example?

Connect sensor to PC (or some kind of computer like Raspberry Pi) via USB or Serial Port. Determine it's port.  
Start sensor's [Daemon](https://github.com/tBlabs/SDS018.Daemon) with appropriate params (host port and usb/serial port).  
You are ready now to start sensor client.

Start sample app with `node bin/TestApps/sample.app.js`.

# Publishing

- Update `version` in `package.json`
- `npm publish`