import React from 'react';

import {StyleSheet, View} from 'react-native';
import ImageButton from 'components/ImageButton';
import {download, ellipsisV, heartLine} from 'assets/images';
import Spacer from 'components/Spacer';

interface Props {
  /**
   * When the heart button is pressed.
   */
  onPressLike: () => void;

  /**
   * When the download button is pressed.
   */
  onPressDl: () => void;

  /**
   * When the more button is pressed.
   */
  onPressMore: () => void;
}

const ActionButtonsRow = ({onPressLike, onPressDl, onPressMore}: Props) => {
  return (
    <View style={styles.container}>
      <ImageButton
        image={heartLine}
        imageStyle={styles.buttonImage}
        onPress={onPressLike}
      />

      <Spacer size={24} orientation="horizontal" />

      <ImageButton
        image={download}
        imageStyle={styles.buttonImage}
        onPress={onPressDl}
      />

      <Spacer size={24} orientation="horizontal" />

      <ImageButton
        image={ellipsisV}
        imageStyle={styles.buttonImage}
        onPress={onPressMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'rgb(153,153,153)',
  },
});

export default ActionButtonsRow;
