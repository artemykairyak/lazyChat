import { Dimensions, StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      backgroundColor: theme.background,
    },
    imgContainer: {
      marginTop: Dimensions.get('window').height / 9,
      alignItems: 'center',
      width: '80%',
    },
    img: {
      width: '100%',
      aspectRatio: 262 / 271,
    },
    title: {
      fontFamily: FontFamily.bold,
      fontSize: 24,
      textAlign: 'center',
      color: theme.text,
      marginTop: 42,
      maxWidth: 280,
    },
    bottomControls: {
      paddingBottom: 20,
      width: '100%',
    },
    policy: {
      color: theme.text,
      fontSize: 14,
      fontFamily: FontFamily.semiBold,
      marginBottom: 18,
      textAlign: 'center',
    },
  });
