import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ post_price }) => {
  const priceForStripe = post_price * 100;
  const publishableKey = 'pk_test_rs6ShmyUDyefKyUmvFkOcvk800QtJrAhp9';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Get Out Austin Ltd.'
      billingAddress
      shippingAddress
      image='https://getoutaustin.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-28+at+1.44.11+PM.png'
      description={`Your total is $${post_price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
