module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@src': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
