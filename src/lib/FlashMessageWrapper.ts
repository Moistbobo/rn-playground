import {showMessage} from 'react-native-flash-message';

export const showFlashMessage = (message: string) => {
  showMessage({
    message,
    type: 'default',
  });
};

export default {
  showFlashMessage,
};
