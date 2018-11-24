"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sensor {
    get Pm10() {
        return this.pm10;
    }
    get Pm25() {
        return this.pm25;
    }
    OnChange(callback) {
        this.onChangeCallback = callback;
    }
    constructor(connector) {
        connector.OnUpdate = (pm10, pm25) => {
            this.pm10 = pm10;
            this.pm25 = pm25;
            this.onChangeCallback(pm10, pm25);
        };
    }
}
exports.Sensor = Sensor;
//# sourceMappingURL=Sensor.js.map