import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    btn: {
      backgroundColor: theme.primary,
      height: 52,
      justifyContent: 'center',
      borderRadius: 30,
    },
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      lineHeight: 16,
      fontFamily: FontFamily.semiBold,
    },
  });
