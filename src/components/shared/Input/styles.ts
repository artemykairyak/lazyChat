import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../../constants/theme.ts';

export default (theme: Theme, icon: boolean) =>
  StyleSheet.create({
    wrapper: {
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      top: '25%',
      left: 12,
      zIndex: 2,
    },
    input: {
      height: 36,
      width: '100%',
      backgroundColor: theme.secondary,
      fontSize: 14,
      fontFamily: FontFamily.semiBold,
      borderRadius: 4,
      paddingHorizontal: icon ? 40 : 8,
      color: theme.text,
    },
  });
