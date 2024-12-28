import { Vehicle } from "./Vehicle";

export class NullObj extends Vehicle {
  public getCapacity(): void {
    console.log(0);
  }
  public getFuelCapacity(): void {
    console.log(0);
  }
}