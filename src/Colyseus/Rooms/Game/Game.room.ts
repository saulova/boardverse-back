// node_modules
import { IncomingMessage } from 'http';
import { Room, Client } from 'colyseus';

// controllers
import OnAuth from './Controllers/OnAuth.controller';
import OnCreate from './Controllers/OnCreate.controller';
import OnJoin from './Controllers/OnJoin.controller';

// schemas
import InGameState from './Schemas/InGameState.schema';

export default class Game extends Room<InGameState> {
  onCreate(options: any) {
    return OnCreate(this, options);
  }

  async onAuth(client: Client, options: any, request: IncomingMessage) {
    try {
      return await OnAuth(client, options, request);
    } catch (error) {
      throw error;
    }
  }

  onJoin(client: Client, options: any, auth: any) {
    return OnJoin(this, client, options, auth);
  }
}
