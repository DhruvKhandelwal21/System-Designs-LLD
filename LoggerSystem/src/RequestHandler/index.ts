import { LogType } from "../../logType";

export class LogRequest {
  private _logType: LogType;
  public get logType(): LogType {
    return this._logType;
  }
  public set logType(value: LogType) {
    this._logType = value;
  }
}
