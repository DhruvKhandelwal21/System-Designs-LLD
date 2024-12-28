import { Screen } from "./Screen";
import { Show } from "./Show";
export class Theatre {
  private _theatreId: number;
  private _address: string;
  private _allScreens: Screen[];

  public get theatreId(): number {
    return this._theatreId;
  }
  public set theatreId(value: number) {
    this._theatreId = value;
  }

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }

  public get allScreens(): Screen[] {
    return this._allScreens;
  }
  public set allScreens(value: Screen[]) {
    this._allScreens = value;
  }
  private _shows: Show[];
  public get shows(): Show[] {
    return this._shows;
  }
  public set shows(value: Show[]) {
    this._shows = value;
  }
}
