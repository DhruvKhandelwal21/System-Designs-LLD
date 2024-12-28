import { VendingState } from "..";
import { CoinType } from "../../coinType";
import { ItemShelf } from "../../itemShelf";
import { VendingMachine } from "../../vendingMachine";
import { Idle } from "./idle";
import { selection } from "./selection";
export class hasMoney implements VendingState {
  constructor() {
    console.log("Machine is in has many state");
  }
  PressBtn(vendingMachine: VendingMachine) {}
  InsertCoin(vendingMachine: VendingMachine, coin: CoinType) {
    const coins = vendingMachine.coins || [];
    coins.push(coin);
    vendingMachine.coins = coins;
  }

  SelectProductbtn(vendingMachine: VendingMachine) {
    vendingMachine.vendingState = new selection();
  }
  ChooseProduct(vendingMachine: VendingMachine) {}
  GetRefund(vendingMachine: VendingMachine) {
    vendingMachine.vendingState = new Idle();
    return vendingMachine.coins;
  }
  GetChange(change: number) {}
  DispenseProduct(vendingMachine: VendingMachine, shelfCode: number) {
    return null;
  }
}
