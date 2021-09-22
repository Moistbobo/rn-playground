import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {ColorValue, StyleSheet} from 'react-native';
import ImageButton from 'components/ImageButton';
import {bars} from 'assets/images';
import {DrawerNavigationProp} from '@react-navigation/drawer';

interface Props {
  /**
   * Override image tintColor for better visibility
   */
  tintColor?: ColorValue;
}

/**
 * A button component that opens the navigation drawer.
 */
const DrawerButton = ({tintColor}: Props) => {
  const drawerNavigator = useNavigation<DrawerNavigationProp<any>>();

  return (
    <ImageButton
      tintColor={tintColor}
      image={bars}
      imageStyle={styles.image}
      onPress={drawerNavigator.openDrawer}
      accessibilityLabel="Drawer Button"
      accessibilityHint="Open the navigation drawer"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default DrawerButton;
