import { StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    header: { backgroundColor: theme.background },
    headerTitleContainer: {
      marginLeft: 0,
    },
    headerTitle: {
      color: theme.text,
      fontFamily: FontFamily.semiBold,
      fontSize: 18,
    },
    headerRight: { width: 14, height: 14, marginRight: 16 },
    tabBar: { height: 57 },
    tabBarItem: {
      paddingBottom: 5,
      backgroundColor: theme.background,
    },
    tabBarLabel: {
      fontSize: 12,
      fontFamily: FontFamily.semiBold,
    },
    tabBarIcon: { width: 22, height: 22 },
  });
