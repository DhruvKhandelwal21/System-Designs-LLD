import { CoinType } from "./coinType";
import { Inventory } from "./inventory";
import { VendingState } from "./states";

export class VendingMachine {
  private _inventory: Inventory;
  private _coins: CoinType[];
  public get coins(): CoinType[] {
    return this._coins;
  }
  public set coins(value: CoinType[]) {
    this._coins = value;
  }
  public get inventory(): Inventory {
    return this._inventory;
  }
  public set inventory(value: Inventory) {
    this._inventory = value;
  }
  private _vendingState: VendingState;
  public get vendingState(): VendingState {
    return this._vendingState;
  }
  public set vendingState(value: VendingState) {
    this._vendingState = value;
  }
}
