// node_modules
import { Client } from 'colyseus';

// rooms
import Game from '../Game.room';

// services
import OnMoveItem from '../Services/OnMoveItem.service';

const OnJoin = (room: Game, client: Client, options: any, auth: any) => {
  client.id = auth.id;

  room.onMessage('moveItem', (client: Client, message: any) => {
    if (message.id && message.x && message.y) {
      OnMoveItem(room.state, { id: message.id, x: message.x, y: message.y });
    }
  });
};

export default OnJoin;
