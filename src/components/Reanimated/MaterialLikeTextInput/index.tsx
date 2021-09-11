import React from 'react';

import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';

const MaterialLikeTextInput = () => {
  const inputRef = React.useRef<any>();
  const containerHeight = React.useRef<number>();

  const [value, setValue] = React.useState('');

  const isFocused = useSharedValue(false);
  const translationValue = useSharedValue(0);

  console.log(value);

  const containerAnimation = useAnimatedStyle(() => {
    const shouldTranslateLabel = translationValue.value || value.length > 0;

    const translationValue = (containerHeight?.current || 0) / -2;

    return {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      left: 16,
      transform: [
        {
          translateY: withSpring(
            shouldTranslateLabel ? translationValue.value : 0,
          ),
        },
        {
          translateX: withSpring(shouldTranslateLabel ? -8 : 0),
        },
      ],
    };
  });

  const textAnimation = useAnimatedStyle(() => ({
    fontSize: withTiming(translationValue.value ? 14 : 18),
    backgroundColor: translationValue.value ? 'white' : 'transparent',
  }));

  const onFocus = () => {
    isFocused.value = true;
  };

  const onBlur = () => {
    isFocused.value = false;
  };

  const onPressContainer = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onLayout =
    (type: 'container' | 'label') => (event: LayoutChangeEvent) => {
      const {
        nativeEvent: {
          layout: {height},
        },
      } = event;

      if (type === 'container') {
        containerHeight.current = height;
      }
    };

  return (
    <TouchableOpacity
      onPress={onPressContainer}
      onLayout={onLayout('container')}
    >
      <Animated.View style={containerAnimation}>
        <Animated.Text style={textAnimation} onLayout={onLayout('label')}>
          Hello world
        </Animated.Text>
      </Animated.View>
      <TextInput
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.textInput}
        onChangeText={setValue}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'rgba(153,153,153,0.4)',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default MaterialLikeTextInput;
