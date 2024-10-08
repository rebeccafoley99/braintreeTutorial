
const express = require('express');
const router = express.Router();
const braintree = require('braintree');


  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'xdb6x38qjgg26hkw',
    publicKey: '996k3hvmrw59strm',
    privateKey: '133553e580be8d387c2293f115c17474'
  });

  router.get("/", (req, res) => {
    gateway.clientToken.generate({}, (err, response) => {
      res.send(response.clientToken);
    });
  });
  router.post('/', (req, res, next) => {
  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  const newTransaction = gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, (error, result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
  });
});

module.exports = router;
