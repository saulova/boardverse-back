import InGameState from '../Schemas/InGameState.schema';
import ItemState from '../Schemas/ItemState.schema';

const CreateInGameState = () => {
  const inGameState = new InGameState();

  const inGameItems = [
    // board
    { id: '1', textureId: '1', x: 1500, y: 1500, locked: true },

    // blue
    { id: '2', textureId: '2', x: 1388, y: 1764, locked: false },
    { id: '3', textureId: '2', x: 1612, y: 1764, locked: false },
    { id: '4', textureId: '3', x: 1538, y: 1764, locked: false },
    { id: '5', textureId: '4', x: 1312, y: 1764, locked: false },
    { id: '6', textureId: '4', x: 1688, y: 1764, locked: false },
    { id: '7', textureId: '5', x: 1234, y: 1688, locked: false },
    { id: '8', textureId: '5', x: 1312, y: 1688, locked: false },
    { id: '9', textureId: '5', x: 1388, y: 1688, locked: false },
    { id: '10', textureId: '5', x: 1462, y: 1688, locked: false },
    { id: '11', textureId: '5', x: 1538, y: 1688, locked: false },
    { id: '12', textureId: '5', x: 1612, y: 1688, locked: false },
    { id: '13', textureId: '5', x: 1688, y: 1688, locked: false },
    { id: '14', textureId: '5', x: 1764, y: 1688, locked: false },
    { id: '15', textureId: '6', x: 1462, y: 1764, locked: false },
    { id: '16', textureId: '7', x: 1234, y: 1764, locked: false },
    { id: '17', textureId: '7', x: 1764, y: 1764, locked: false },

    // red
    { id: '18', textureId: '8', x: 1388, y: 1238, locked: false },
    { id: '19', textureId: '8', x: 1612, y: 1238, locked: false },
    { id: '20', textureId: '9', x: 1538, y: 1238, locked: false },
    { id: '21', textureId: '10', x: 1312, y: 1238, locked: false },
    { id: '22', textureId: '10', x: 1688, y: 1238, locked: false },
    { id: '23', textureId: '11', x: 1234, y: 1314, locked: false },
    { id: '24', textureId: '11', x: 1312, y: 1314, locked: false },
    { id: '25', textureId: '11', x: 1388, y: 1314, locked: false },
    { id: '26', textureId: '11', x: 1462, y: 1314, locked: false },
    { id: '27', textureId: '11', x: 1538, y: 1314, locked: false },
    { id: '28', textureId: '11', x: 1612, y: 1314, locked: false },
    { id: '29', textureId: '11', x: 1688, y: 1314, locked: false },
    { id: '39', textureId: '11', x: 1764, y: 1314, locked: false },
    { id: '31', textureId: '12', x: 1462, y: 1238, locked: false },
    { id: '32', textureId: '13', x: 1234, y: 1238, locked: false },
    { id: '33', textureId: '13', x: 1764, y: 1238, locked: false },
  ];

  inGameItems.map((item) => {
    const itemState = new ItemState();

    itemState.id = item.id;
    itemState.textureId = item.textureId;
    itemState.x = item.x;
    itemState.y = item.y;
    itemState.locked = item.locked;

    inGameState.inGame.push(itemState);
  });

  return inGameState;
};

export default CreateInGameState;
