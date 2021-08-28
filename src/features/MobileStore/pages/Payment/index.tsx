import React from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {ScrollView} from 'react-native';

const Payment = () => {
  const {confirmPayment} = useStripe();

  return (
    <ScrollView>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
    </ScrollView>
  );
};

export default Payment;
