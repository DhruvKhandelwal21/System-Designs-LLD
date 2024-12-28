import { Movie } from "./Movie";
import { Screen } from "./Screen";

export class Show {
  private _showId: Number;
  public get showId(): Number {
    return this._showId;
  }
  public set showId(value: Number) {
    this._showId = value;
  }
  private _movie: Movie;
  public get movie(): Movie {
    return this._movie;
  }
  public set movie(value: Movie) {
    this._movie = value;
  }
  private _screen: Screen;
  public get screen(): Screen {
    return this._screen;
  }
  public set screen(value: Screen) {
    this._screen = value;
  }
  private _seatIds: number[];
  public get seatIds(): number[] {
    return this._seatIds;
  }
  public set seatIds(value: number[]) {
    this._seatIds = value;
  }
}
