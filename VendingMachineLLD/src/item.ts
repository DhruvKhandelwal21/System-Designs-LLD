import { ItemType } from "./itemType";

export class Item {
  constructor(type: ItemType, price: number){
    this._price = price;
    this._type = type;
  }
  private _type: ItemType;
  public get type(): ItemType {
    return this._type;
  }
  public set type(value: ItemType) {
    this._type = value;
  }
  private _price: number;
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
}
