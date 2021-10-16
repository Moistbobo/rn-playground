# Animated Bottom Tab Button

A Customizable bottom tab badge button with support for 3 sub buttons.

The main button plays an animation while the sub buttons sequentially appear from behind.

https://user-images.githubusercontent.com/29080587/137585786-95d044e9-239a-4c72-8f17-849a6db421dd.mov


## How it works
The [MainButton](https://github.com/Moistbobo/rn-playground/blob/feature/rn-playground-29/src/features/Reanimated/pages/AnimatedBottomTabButton/components/MainButton/index.tsx) component houses the 3 [SubButton](https://github.com/Moistbobo/rn-playground/blob/feature/rn-playground-29/src/features/Reanimated/pages/AnimatedBottomTabButton/components/SubButton/index.tsx) components.
The SubButtons are rendered with `position:'absolute'` and centered underneath the MainButton, and are translated to the opened positions using [Reanimated](https://github.com/software-mansion/react-native-reanimated) once the MainButton is pressed.

This means that the SubButtons are always rendered on screen, and there is a possibility that they can be pressed when they are in the middle of the "hide" animation, however, as the `opened` state from the main animaiton file [is exposed](https://github.com/Moistbobo/rn-playground/blob/2cf4cbe219a4f26467f55cd19d7b9e0bdda22f92/src/features/Reanimated/pages/AnimatedBottomTabButton/components/MainButton/animations.ts#L106), it would be trivial to use this value to disable the touchable properties of the SubButton during the animation.
