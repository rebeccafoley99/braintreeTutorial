const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "6hnmdjfxhrywhbkb",
  publicKey: "v8czpcqrmp49nd63",
  privateKey: "5bc8af5523d28048d1cdfe2651dac200"
});