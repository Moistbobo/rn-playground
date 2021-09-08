# MobileStore demo

A simple mobile store demo with cart and stripe checkout.

## Libraries tested
* [react-native-shared-element](https://github.com/IjzerenHein/react-native-shared-element)
* [stripe-react-native](https://github.com/stripe/stripe-react-native)


Use a test card found [here](https://stripe.com/docs/testing).

A stripe public key is necessary to test the payment flow.

<img src="https://i.imgur.com/8dRsBa2.png" alt="drawing" width="300"/>
<img src="https://i.imgur.com/u8VDt7b.png" alt="drawing" width="300"/>
<img src="https://i.imgur.com/rmYI10H.png" alt="drawing" width="300"/>

## Credits
[icons](https://fontawesome.com/)
[palette](https://colorhunt.co/palette/f5e8c7deba9d9e77776f4c5b)
[images](https://store.line.me/stickershop/product/14155167/en)

## Known issues
When deleting cart items, if the item under the item being deleted is currently in edit mode, it will briefly display an incorrect stop number before updating.
