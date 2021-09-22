import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';
import GKText from 'components/GK/GKText';
import GKAlsoLikeListItem from 'components/GK/GKAlsoLikeList/GKAlsoLikeListItem';
import Spacer from 'components/Spacer';

interface Props {
  /**
   * The list data.
   */
  data: any[];

  /**
   * Callback when the item is pressed.
   * @param _item - The item data.
   */
  onItemPress: (_item: any) => () => void;

  /**
   * Text that is rendered above the list.
   */
  label: string;
}

const GKAlsoLikeList = ({data, onItemPress, label}: Props) => {
  const renderItem = ({item}: {item: any}) => {
    return (
      <GKAlsoLikeListItem
        onPress={onItemPress(item)}
        image={{uri: item.image}}
        label={item.label}
      />
    );
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <GKText variant="subtitle">{label}</GKText>
      </View>

      <Spacer size={16} />
      <FlatList
        horizontal
        ItemSeparatorComponent={() => (
          <Spacer size={16} orientation="horizontal" />
        )}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 8,
  },
});

export default GKAlsoLikeList;
