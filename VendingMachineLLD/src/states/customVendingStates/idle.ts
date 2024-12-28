import { VendingState } from "..";
import { CoinType } from "../../coinType";
import { VendingMachine } from "../../vendingMachine";
import { hasMoney } from "./hasMoney";

export class Idle implements VendingState {
  constructor() {
    console.log("Machine is in idle state");
  }
  PressBtn(vendingMachine: VendingMachine) {
    vendingMachine.vendingState = new hasMoney();
    console.log(vendingMachine.vendingState)
  }
  InsertCoin(VendingMachine: VendingMachine, coin: CoinType) {
    console.log("nothing");
  }
  SelectProductbtn(VendingMachine: VendingMachine) {}
  ChooseProduct(VendingMachine: VendingMachine) {}
  GetRefund(VendingMachine: VendingMachine) {
    return null;
  }
  GetChange(change: number) {
  }
  DispenseProduct(VendingMachine: VendingMachine) {
    return null;
  }
}
