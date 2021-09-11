# RN Playground

A react native project for me to play around with various libraries.

See [the features folder](https://github.com/Moistbobo/rn-playground/tree/develop/src/features) for more details.

The API_URL in the .env.sample was intentionally left there as some features require connection to my personal server.

## Setup
1. Install dependencies using `yarn`
2. This project uses [react-native-config](https://github.com/luggit/react-native-config) for its environment variables. Copy `.env.development.sample` into `.env.development`.

### Android
1. To switch to storybook, run `yarn use-storybook && yarn prestorybook`
2. To switch to regular app mode, run `yarn use-main`
3. Run android with `yarn android`

### ios
1. Run `cd ios && pod install && cd ..`
2. Run ios with `yarn ios`
