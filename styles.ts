import { StyleSheet } from 'react-native';
import { Theme } from './src/constants/colors.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    bg: {
      backgroundColor: theme.background,
      flex: 1,
    },
  });
