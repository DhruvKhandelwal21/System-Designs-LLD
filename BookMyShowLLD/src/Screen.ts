import { Seat } from "./Seat";

export class Screen {
  private _screenId: number;
  public get screenId(): number {
    return this._screenId;
  }
  public set screenId(value: number) {
    this._screenId = value;
  }
  private _seats: Seat[];
  public get seats(): Seat[] {
    return this._seats;
  }
  public set seats(value: Seat[]) {
    this._seats = value;
  }
}
