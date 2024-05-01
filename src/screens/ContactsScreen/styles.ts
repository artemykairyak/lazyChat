import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    view: {
      backgroundColor: theme.background,
      flex: 1,
      paddingHorizontal: 16,
    },
    search: {
      marginTop: 16,
    },
    searchIcon: {
      width: 16,
      height: 17,
    },
    contacts: {
      marginTop: 12,
    },
  });
