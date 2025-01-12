// Eg - LLD of calculator

import { ArithmeticExpression } from "./ArithmeticExpression";
import { Expression } from "./Expression";
import { NumberExpression } from "./NumberExpression";
import { Operation } from "./Operation";

// We just created a common interface with a common
// recursive evaluate function
const Main = () => {
  const two: Expression = new NumberExpression(2);
  const seven: Expression = new NumberExpression(7);
  const three: Expression = new ArithmeticExpression(two, seven, Operation.ADD);
  const eight: Expression = new NumberExpression(8);
  const last: Expression = new ArithmeticExpression(
    three,
    eight,
    Operation.MULTIPLY
  );
  const ans = last.evaluate();
  console.log(ans);
};

Main();
