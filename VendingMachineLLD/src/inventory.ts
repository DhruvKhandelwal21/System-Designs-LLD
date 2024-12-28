import { ItemShelf } from "./itemShelf";

export class Inventory {
  private _itemShelfs: ItemShelf[];

  public get itemShelfs(): ItemShelf[] {
    return this._itemShelfs;
  }
  public set itemShelfs(value: ItemShelf[]) {
    this._itemShelfs = value;
  }

  public addItem(shelfCode: number, cnt: number) {
    this._itemShelfs?.forEach((currItem: ItemShelf) => {
      if (currItem.code === shelfCode) {
        if (currItem.itemCount + cnt > ItemShelf.MAX_ITEM_LIMIT) {
          throw new Error("Item count cant exceed the limt");
        }
        currItem.itemCount = currItem.itemCount + cnt;
        if (currItem.isSoldOut) currItem.isSoldOut = false;
      }
    });
  }

  public removeItem(shelfCode: number) {
    this._itemShelfs?.forEach((currItem: ItemShelf) => {
      if (currItem.code === shelfCode) {
        if (currItem.isSoldOut) {
          throw new Error("Shelf is already empty");
        } else {
          currItem.itemCount = currItem.itemCount - 1;
          if (currItem.itemCount === 0) {
            currItem.isSoldOut = true;
          }
        }
      }
    });
  }
}
