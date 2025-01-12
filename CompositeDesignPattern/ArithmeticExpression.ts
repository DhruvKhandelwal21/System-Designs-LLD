import { Expression } from "./Expression";
import { Operation } from "./Operation";

export class ArithmeticExpression implements Expression {
  leftExp: Expression;
  rightExp: Expression;
  operator: Operation;

  constructor(
    leftExp: Expression,
    rightExp: Expression,
    operator: Operation
  ) {
    this.leftExp = leftExp;
    this.rightExp = rightExp;
    this.operator = operator;
  }
  evaluate(): number {
    let val: number = 0;
    switch (this.operator) {
      case Operation.ADD:
        val = this.leftExp.evaluate() + this.rightExp.evaluate();
        break;
      case Operation.SUBTRACT:
        val = this.leftExp.evaluate() - this.rightExp.evaluate();
        break;
      case Operation.MULTIPLY:
        val = this.leftExp.evaluate() * this.rightExp.evaluate();
        break;
      case Operation.DIVIDE:
        val = this.leftExp.evaluate() / this.rightExp.evaluate();
        break;
    }

    return val;
  }
}
