import { CoinType } from "./src/coinType";
import { Inventory } from "./src/inventory";
import { Item } from "./src/item";
import { ItemShelf } from "./src/itemShelf";
import { ItemType } from "./src/itemType";
import { Idle } from "./src/states/customVendingStates/idle";
import { VendingMachine } from "./src/vendingMachine";

// also implementation of state design pattern.
const Main = () => {
  // fill up the inventory
  const inventory: Inventory = setupInventory();
  const vendingMachine = new VendingMachine();
  vendingMachine.inventory = inventory;
  vendingMachine.vendingState = new Idle();
  vendingMachine.vendingState.PressBtn(vendingMachine);
//   console.log(vendingMachine.vendingState)
  vendingMachine.vendingState.InsertCoin(vendingMachine, CoinType.QUARTER);
  vendingMachine.vendingState.InsertCoin(vendingMachine, CoinType.NICKEL);
  vendingMachine.vendingState.InsertCoin(vendingMachine, CoinType.QUARTER);
  vendingMachine.vendingState.InsertCoin(vendingMachine, CoinType.DIME);
  vendingMachine.vendingState.InsertCoin(vendingMachine, CoinType.QUARTER);
  vendingMachine.vendingState.SelectProductbtn(vendingMachine);
  vendingMachine.vendingState.ChooseProduct(vendingMachine, 107);
  const testItem: Item | null = vendingMachine.vendingState.DispenseProduct(vendingMachine, 107);
  console.log(testItem)
  // start dispensing
};

const setupInventory = () => {
  const item1 = new Item(ItemType.CHIPS, 45);
  const item2 = new Item(ItemType.COKE, 56);
  const item3 = new Item(ItemType.LASSI, 33);
  const shelf1 = new ItemShelf(105, item1);
  const shelf2 = new ItemShelf(107, item2);
  const shelf3 = new ItemShelf(109, item3);
  const inventory = new Inventory();
  inventory.itemShelfs = [shelf1, shelf2, shelf3];
  inventory.addItem(105, 23);
  inventory.addItem(107, 12);
  inventory.addItem(109, 33);
  return inventory;
};
Main();
