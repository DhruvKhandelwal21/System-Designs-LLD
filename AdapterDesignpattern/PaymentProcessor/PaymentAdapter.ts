import { PaymentProcessor } from ".";
import { LegacyProcessor } from "./legacyProcessor";

export class PaymentAdapter implements PaymentProcessor {
  private legacyProcessor: LegacyProcessor;
  constructor(legacyProcessor: LegacyProcessor) {
    this.legacyProcessor = legacyProcessor;
  }
  pay(amount: number) {
    this.legacyProcessor.makePayment(amount);
  }
}
