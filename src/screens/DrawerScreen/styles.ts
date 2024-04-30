import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    menu: {
      backgroundColor: theme.background,
      paddingTop: 24,
      flex: 1,
      paddingBottom: 12,
    },
    account: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 0,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginBottom: 12,
    },
    accountContent: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 100,
      backgroundColor: theme.neutral,
    },
    placeholder: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    personIcon: {
      width: 24,
      height: 24,
    },
    accountInfo: {},
    name: {
      fontSize: 14,
      fontFamily: FontFamily.semiBold,
      color: theme.text,
      lineHeight: 24,
    },
    username: {
      color: theme.disabled,
      fontSize: 12,
      fontFamily: FontFamily.regular,
      lineHeight: 20,
    },
    arrow: { width: 8, height: 12 },
    items: {
      borderTopColor: theme.neutral,
      borderTopWidth: 1,
      paddingTop: 18,
      gap: 8,
      flex: 1,
    },
    themeBtn: {
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 8,
    },
    themeText: {
      color: theme.text,
      fontFamily: FontFamily.semiBold,
      fontSize: 14,
      lineHeight: 24,
    },
  });
