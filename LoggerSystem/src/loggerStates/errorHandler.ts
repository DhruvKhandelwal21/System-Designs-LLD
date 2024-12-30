import { ParentLogger } from ".";
import { LogType } from "../../logType";
import { LogRequest } from "../RequestHandler";

export class ErrorHandler implements ParentLogger {
    private nextLogger: ParentLogger;
    public setNextState(logger: ParentLogger | null): void {
      
    }
    handleRequest(request: LogRequest): void {
      if (request.logType === LogType.ERROR) {
        console.log("Error logger");
      } else {
        this.nextLogger.handleRequest(request);
      }
    }
  }