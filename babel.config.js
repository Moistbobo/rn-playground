module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          features: './src/features/',
          services: './src/services/',
          store: './src/store/',
          navigation: './src/navigation/',
          types: './src/types/',
          hooks: './src/hooks/',
          lib: './src/lib/',
          assets: './src/assets/',
          components: './src/components/',
          config: './src/config/',
          storybook: './storybook/',
        },
      },
    ],
  ],
};
