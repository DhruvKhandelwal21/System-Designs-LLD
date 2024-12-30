import { ParentLogger } from ".";
import { LogType } from "../../logType";
import { LogRequest } from "../RequestHandler";

export class DebugHandler implements ParentLogger {
  private nextLogger: ParentLogger;
  public setNextState(logger: ParentLogger): void {
    this.nextLogger = logger;
  }
  handleRequest(request: LogRequest): void {
    if (request.logType === LogType.DEBUG) {
      console.log("Debug logger");
    } else {
      this.nextLogger.handleRequest(request);
    }
  }
}
