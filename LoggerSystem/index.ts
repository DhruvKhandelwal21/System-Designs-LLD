import { LogType } from "./logType";
import { DebugHandler } from "./src/loggerStates/debugHandler";
import { ErrorHandler } from "./src/loggerStates/errorHandler";
import { InfoHandler } from "./src/loggerStates/infoHandler";
import { LogRequest } from "./src/RequestHandler";

// Logger system based on the chain of responsibility
// design pattern
const Main = () => {
  const infoHandler = new InfoHandler();
  const debugHandler = new DebugHandler();
  const errorHandler = new ErrorHandler();
  // setting up the chain
  // This pattern allows an object to send request to
  // another object without knowing who is gonna 
  // handle it.
  // Main Features - 
  // -> Single Responsibility
  // -> Loose Coupling
  // -> Fallback Mechanism for handling the case where no object in chain will process the request.
  // -> New handlers can be easily added.

  // For small use cases we can go for if/else but in case out system grew this approach will not be feasible.
  // -> We will be violating open closed principle as we are gonna have a single class where this chain will exist and we need to make changes in that
  // It will not be reusable and will be hard to maintain.

  // Cons- 
  // -> potential performance overhead
  // -> Increased complexity and sometimes hard to debug.
  
  infoHandler.setNextState(debugHandler);
  debugHandler.setNextState(errorHandler);
  const request1 = new LogRequest();
  const request2 = new LogRequest();
  request1.logType = LogType.DEBUG;
  request2.logType = LogType.ERROR;
  // using first handler to send the request
  infoHandler.handleRequest(request1);
  infoHandler.handleRequest(request2);
};

Main();
