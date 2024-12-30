import { LogRequest } from "../RequestHandler";

export interface ParentLogger {
  handleRequest: (request: LogRequest) => void;
  setNextState: (logger: ParentLogger) => void;
}
