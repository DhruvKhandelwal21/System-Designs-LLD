import { Payment } from "./Payment";
import { Seat } from "./Seat";
import { Show } from "./Show";

export class Booking {
  private _show: Show;
  private _bookedSeats: Seat[];
  private _payment: Payment;

  public get payment(): Payment {
    return this._payment;
  }
  public set payment(value: Payment) {
    this._payment = value;
  }

  public get bookedSeats(): Seat[] {
    return this._bookedSeats;
  }
  public set bookedSeats(value: Seat[]) {
    this._bookedSeats = value;
  }
  public get show(): Show {
    return this._show;
  }
  public set show(value: Show) {
    this._show = value;
  }
}
