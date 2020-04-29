import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import UserContext from '../../src/context/userContext.context';
const StripeCheckoutButton = ({ post_price, post_id }) => {
  const { userGlobal } = useContext(UserContext);
  const priceForStripe = post_price * 100;
  const publishableKey = 'pk_test_rs6ShmyUDyefKyUmvFkOcvk800QtJrAhp9';

  const onToken = (token) => {
    token = {
      ...token,
      uid: userGlobal.uid,
      post_id: post_id,
      quest_count: 2,
      paid: true,
    };
    console.log(token);
    fetch('http://localhost:3001/dbwrite/v1/posts/guests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    }).then((result) => {
      return result.json();
    });

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
