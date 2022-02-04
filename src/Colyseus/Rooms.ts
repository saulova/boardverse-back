import { Server as ColyseusServer } from 'colyseus';
import Game from './Rooms/Game/Game.room';

const Rooms = (gameServer: ColyseusServer) => {
  gameServer.define('chess', Game);
};

export default Rooms;
