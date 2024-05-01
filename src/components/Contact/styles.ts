import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    contact: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      borderBottomColor: theme.neutral,
      borderBottomWidth: 1,
      paddingVertical: 16,
    },
    contactFields: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    avatarWrapper: {
      position: 'relative',
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 16,
    },
    online: {
      height: 12,
      width: 12,
      backgroundColor: theme.online,
      borderRadius: 100,
      position: 'absolute',
      top: -2,
      right: -2,
      borderColor: theme.background,
      borderWidth: 2,
    },
    info: {
      gap: 3,
    },
    name: {
      fontFamily: FontFamily.semiBold,
      fontSize: 14,
      color: theme.text,
    },
    status: {
      fontFamily: FontFamily.regular,
      color: theme.disabled,
      fontSize: 12,
    },
    messageFields: {
      alignSelf: 'flex-start',
      alignItems: 'flex-end',
    },
    date: {
      color: theme.disabled,
      fontFamily: FontFamily.regular,
      fontSize: 10,
      marginBottom: 10,
    },
    unreadCount: {
      backgroundColor: theme.purple,
      height: 20,
      minWidth: 20,
      borderRadius: 40,
      paddingHorizontal: 3,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: theme.primary,
      fontFamily: FontFamily.bold,
      fontSize: 10,
      lineHeight: 20,
    },
  });
