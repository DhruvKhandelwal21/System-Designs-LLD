import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  public getCapacity(): void {
    console.log(4);
  }
  public getFuelCapacity(): void {
    console.log(40);
  }
}
