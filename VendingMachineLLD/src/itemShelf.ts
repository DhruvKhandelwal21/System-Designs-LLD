import { Item } from "./item";

export class ItemShelf {
  public static readonly MAX_ITEM_LIMIT: number = 100;
  constructor(code: number, item: Item) {
    this._code = code;
    this._item = item;
    this._isSoldOut = false;
    this._itemCount = 0;
  }
  private _code: number;
  private _isSoldOut: boolean;
  public get isSoldOut(): boolean {
    return this._isSoldOut;
  }
  private _itemCount: number;
  public get itemCount(): number {
    return this._itemCount;
  }
  public set itemCount(value: number) {
    this._itemCount = value;
  }
  public set isSoldOut(value: boolean) {
    this._isSoldOut = value;
  }
  public get code(): number {
    return this._code;
  }
  public set code(value: number) {
    this._code = value;
  }
  private _item: Item;
  public get item(): Item {
    return this._item;
  }
  public set item(value: Item) {
    this._item = value;
  }
}
