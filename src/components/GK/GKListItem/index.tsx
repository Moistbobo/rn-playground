import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import GKText from 'components/GK/GKText';
import Spacer from 'components/Spacer';
import ImageButton from 'components/ImageButton';
import {ellipsisV} from 'assets/images';

interface Props {
  /**
   * When the item content is pressed.
   */
  onPressItem: () => void;

  /**
   * When the More button is pressed.
   */
  onPressMore: () => void;

  /**
   * The main label of the item.
   */
  label: string;

  /**
   * The subtitle of the item, rendered under the label.
   */
  subtitle: string;
}

/**
 * A component to render individual list items in the G&K page
 */
const GKListItem = ({onPressItem, onPressMore, label, subtitle}: Props) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={styles.container}>
      <View>
        <GKText variant="header">{label}</GKText>
        <Spacer size={8} orientation="vertical" />
        <GKText variant="description">{subtitle}</GKText>
      </View>

      <ImageButton
        image={ellipsisV}
        onPress={onPressMore}
        imageStyle={styles.moreButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreButton: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});

export default GKListItem;
