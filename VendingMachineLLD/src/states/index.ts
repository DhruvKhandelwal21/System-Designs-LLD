import { CoinType } from "../coinType";
import { Item } from "../item";
import { VendingMachine } from "../vendingMachine";

export interface VendingState {
  PressBtn(VendingMachine: VendingMachine): void;
  InsertCoin(VendingMachine: VendingMachine, coin: CoinType): void;
  SelectProductbtn(VendingMachine: VendingMachine): void;
  ChooseProduct(VendingMachine: VendingMachine, shelfCode: number): void;
  GetRefund(VendingMachine: VendingMachine): CoinType[] | null;
  GetChange(change: number): void;
  DispenseProduct(
    VendingMachine: VendingMachine,
    shelfCode: number
  ): Item | null;
}
