import { ParentLogger } from ".";
import { LogType } from "../../logType";
import { LogRequest } from "../RequestHandler";

export class InfoHandler implements ParentLogger {
  private nextLogger: ParentLogger;
  public setNextState(logger: ParentLogger): void {
    this.nextLogger = logger;
  }
  handleRequest(request: LogRequest): void {
    if (request.logType === LogType.INFO) {
      console.log("Info logger");
    } else {
      this.nextLogger.handleRequest(request);
    }
  }
}
