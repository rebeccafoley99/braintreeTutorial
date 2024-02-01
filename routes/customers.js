var express = require('express');
var router = express.Router();
 

 
 // create customer with payment method
  // docs - https://developer.paypal.com/braintree/docs/guides/customers/node
  gateway.customer.create({
    firstName: "Charity",
    lastName: "Smith",
    paymentMethodNonce: nonceFromTheClient
  }, (err, result) => {
    result.success;
    // true
  
    result.customer.id;
    // e.g 160923
  
    result.customer.paymentMethods[0].token;
    // e.g f28wm
  });

  module.exports = router;