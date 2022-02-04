// node_modules
import { Schema, type } from '@colyseus/schema';

export default class ItemState extends Schema {
  @type('string') id: string;
  @type('string') textureId: string;
  @type('number') x: number;
  @type('number') y: number;
  @type('boolean') locked: boolean;
}
