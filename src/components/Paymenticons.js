import React from 'react';
import { Mastercard, Visa, Paypal, Amex, Alipay } from 'react-payment-logos/dist/flat';

function Paymenticons() {
  return (
    <div className='custom-paymnet-icons'>
      <Mastercard />
      <Visa />
      <Paypal />
      <Amex  />
      <Alipay  />
    </div>
  );
}

export default Paymenticons;