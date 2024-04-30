import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    btn: {
      flex: 0,
      height: 60,
      alignSelf: 'flex-start',
      paddingRight: 24,
      paddingLeft: 16,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flex: 0,
      height: '100%',
    },
    icon: { width: 24, height: 24 },
    text: { color: theme.text, fontSize: 18, fontFamily: FontFamily.semiBold },
  });
