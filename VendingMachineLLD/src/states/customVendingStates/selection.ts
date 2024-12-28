import { VendingState } from "..";
import { CoinType } from "../../coinType";
import { ItemShelf } from "../../itemShelf";
import { VendingMachine } from "../../vendingMachine";
import { dispense } from "./dispense";
import { Idle } from "./idle";

export class selection implements VendingState {
  constructor() {
    console.log("Machine is in selection state");
  }
  PressBtn(vendingMachine: VendingMachine) {}
  InsertCoin(vendingMachine: VendingMachine, coin: CoinType) {
    console.log("nothing");
  }

  SelectProductbtn(vendingMachine: VendingMachine) {}
  ChooseProduct(vendingMachine: VendingMachine, shelfCode: number) {
    vendingMachine.inventory.removeItem(shelfCode);
    vendingMachine.inventory.itemShelfs?.forEach((shelf: ItemShelf) => {
      if (shelf.code === shelfCode) {
        const itemPrice = shelf.item.price;
        const coinValue = vendingMachine.coins?.reduce(
          (curr, acc) => (acc += curr),
          0
        );
        if (coinValue >= itemPrice) {
          this.GetChange(coinValue - itemPrice);
        } else {
          this.GetRefund(vendingMachine);
        }
      }
    });
    vendingMachine.vendingState = new dispense();
  }
  GetRefund(vendingMachine: VendingMachine) {
    vendingMachine.vendingState = new Idle();
    return vendingMachine.coins;
  }
  GetChange(change: number) {
    console.log(`Take your bloody change ${change}`);
  }
  DispenseProduct(vendingMachine: VendingMachine) {
    return null;
  }
}
