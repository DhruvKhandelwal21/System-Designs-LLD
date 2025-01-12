// Scenario -> Suppose you are building a payment gateway. Your system expects a standard PaymentProcessor interface, but you need to integrate a legacy payment system with a different interface.

import { PaymentProcessor } from "./PaymentProcessor";
import { LegacyProcessor } from "./PaymentProcessor/legacyProcessor";
import { PaymentAdapter } from "./PaymentProcessor/PaymentAdapter";

const Main = () => {
  const legacyProcessor: LegacyProcessor = new LegacyProcessor();
  const paymentProcessor: PaymentProcessor = new PaymentAdapter(
    legacyProcessor
  );
  paymentProcessor.pay(50);
};

Main();
