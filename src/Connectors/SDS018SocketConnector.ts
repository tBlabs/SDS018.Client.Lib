import { ISensorConnector } from "./ISensorConnector";
import SocketIoClient from 'socket.io-client';

export class SDS018SocketConnector implements ISensorConnector
{
    private socket;

    public OnUpdate: (pm10: number, pm25: number) => void = () => { };

    constructor(connectionString: string)
    {
        this.socket = SocketIoClient(connectionString);

        this.socket.on('connect', () =>
        {
            // console.log('CONNECT', this.socket.id);

            this.socket.emit('get-all');
        });

        this.socket.on('update', (pm10: number, pm25: number) =>
        {
            this.OnUpdate(pm10, pm25);
        });

        this.socket.on('error', (err) => console.log('ERROR', err));

        this.socket.on('disconnect', (err) => console.log('DISCONNECT', err));
    }

    public Disconnect(): void
    {
        this.socket.close();
    }
}
