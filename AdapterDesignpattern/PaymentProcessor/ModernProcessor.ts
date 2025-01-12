import { PaymentProcessor } from ".";

export class ModernProcessor implements PaymentProcessor {
  pay(amount: number) {
    console.log(`this amount is processed with modern processor: ${amount}`);
  }
}