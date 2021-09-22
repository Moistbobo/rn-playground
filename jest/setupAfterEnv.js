import '@testing-library/jest-native/extend-expect';

jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));
