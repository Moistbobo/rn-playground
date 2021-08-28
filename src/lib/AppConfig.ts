import Config from 'react-native-config';

export enum AppConfigEnum {
  stripePK = 'STRIPE_PK',
}

const get = (key: AppConfigEnum) => Config[key];

export default {get};
