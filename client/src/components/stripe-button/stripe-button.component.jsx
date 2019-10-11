import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SmMcunW9gjRfMJyVq2414gSg00ArMVpueO';

    const onToken = token => {
        axios({
            data: {
                amount: priceForStripe,
                token: token
            },
            method: 'post',
            url: 'payment',
        })
        .then(response => {
            alert('succesful payment');
        })
        .catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
        });
    };

    return (
        <StripeCheckout
            amount={ priceForStripe }
            billingAddress
            description={ `Your total is $${ price }` }
            image='https://svgshare.com/i/CUz.svg'
            label='Pay Now'
            name={ `Harry's Hoods Ltd.` }
            panelLabel='Pay Now'
            shippingAddress
            stripeKey={ publishableKey }
            token={ onToken }
        />
    );
};

export default StripeCheckoutButton;
