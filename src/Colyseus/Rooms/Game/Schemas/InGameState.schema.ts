// node_modules
import { Schema, ArraySchema, type } from '@colyseus/schema';

// schemas
import ItemState from './ItemState.schema';

export default class InGameState extends Schema {
  @type([ItemState]) inGame = new ArraySchema<ItemState>();
}
