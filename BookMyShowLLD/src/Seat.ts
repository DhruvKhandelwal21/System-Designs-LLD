import { SeatCategory } from "./Constant";

export class Seat {
  private _seatId: number;
  public get seatId(): number {
    return this._seatId;
  }
  public set seatId(value: number) {
    this._seatId = value;
  }
  
  private _row: number;
  public get row(): number {
    return this._row;
  }
  public set row(value: number) {
    this._row = value;
  }

  private _seatCategory: SeatCategory;
  public get seatCategory(): SeatCategory {
    return this._seatCategory;
  }
  public set seatCategory(value: SeatCategory) {
    this._seatCategory = value;
  }
}
