// rooms
import Game from '../Game.room';

// services
import CreateInGameState from '../Services/CreateInGameState.service';

const OnCreate = (room: Game, options: any) => {
  const inGameState = CreateInGameState();
  room.setState(inGameState);
};

export default OnCreate;
