import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    item: {
      width: '100%',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      justifyContent: 'space-between',
    },
    textContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    text: {
      color: theme.text,
      fontFamily: FontFamily.semiBold,
      fontSize: 14,
      lineHeight: 24,
    },
    icon: {
      width: 18,
      height: 18,
    },
    arrow: {
      width: 8,
      height: 12,
    },
  });
