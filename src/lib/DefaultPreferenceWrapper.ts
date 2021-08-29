import RNDefaultPreference from 'react-native-default-preference';

// RNDefaultPreference wrapper to make default preference manipulation safer and more intuitive

export enum PreferenceKeys {
  PLACEHOLDER = 'PLACEHOLDER',
}

export const getPreference = async (key: PreferenceKeys) => {
  const valueJson = await RNDefaultPreference.get(key);

  return valueJson ? JSON.parse(valueJson) : '';
};

export const writePreference = async (key: PreferenceKeys, value: any) => {
  await RNDefaultPreference.set(key, JSON.stringify(value));
};
