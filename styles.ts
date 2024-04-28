import { StyleSheet } from 'react-native';
import { Theme } from './src/constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    surface: {
      backgroundColor: theme.background,
      flex: 1,
    },
  });
