import InGameState from '../Schemas/InGameState.schema';

const OnMoveItem = (
  state: InGameState,
  newData: { id: string; x: number; y: number }
) => {
  const item = state.inGame.find((element) => element.id == newData.id);
  if (item) {
    item.x = newData.x;
    item.y = newData.y;
  }
};

export default OnMoveItem;
