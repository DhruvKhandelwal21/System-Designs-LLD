import { Expression } from "./Expression";

export class NumberExpression implements Expression {
  num: number;
  constructor(num: number) {
    this.num = num;
  }
  public evaluate(): number {
    return this.num;
  }
}
