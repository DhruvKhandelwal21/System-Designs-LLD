import { VendingState } from "..";
import { CoinType } from "../../coinType";
import { Item } from "../../item";
import { VendingMachine } from "../../vendingMachine";
import { Idle } from "./idle";

export class dispense implements VendingState {
  constructor() {
    console.log("Machine is in dispense state");
  }
  PressBtn(vendingMachine: VendingMachine) {
    vendingMachine.vendingState = new Idle();
  }
  InsertCoin(vendingMachine: VendingMachine, coin: CoinType) {}

  SelectProductbtn(vendingMachine: VendingMachine) {}
  ChooseProduct(vendingMachine: VendingMachine) {}
  GetRefund(vendingMachine: VendingMachine) {
    return null;
  }
  GetChange(change: number) {
  }
  DispenseProduct(vendingMachine: VendingMachine, shelfCode: number) {
    console.log(vendingMachine.inventory.itemShelfs)
    console.log(shelfCode)
    const requiredItem: Item | null = vendingMachine.inventory.itemShelfs.find((_shelf)=> _shelf.code===shelfCode)?.item || null;
    return requiredItem;
  }
}
