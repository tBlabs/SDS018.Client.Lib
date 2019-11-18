"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
class SDS018SocketConnector {
    constructor(connectionString) {
        this.OnUpdate = () => { };
        this.socket = socket_io_client_1.default(connectionString);
        this.socket.on('connect', () => {
            // console.log('CONNECT', this.socket.id);
            this.socket.emit('get-all');
        });
        this.socket.on('update', (pm10, pm25) => {
            this.OnUpdate(pm10, pm25);
        });
        this.socket.on('error', (err) => console.log('ERROR', err));
        this.socket.on('disconnect', (err) => console.log('DISCONNECT', err));
    }
    Disconnect() {
        this.socket.close();
    }
}
exports.SDS018SocketConnector = SDS018SocketConnector;
//# sourceMappingURL=SDS018SocketConnector.js.map