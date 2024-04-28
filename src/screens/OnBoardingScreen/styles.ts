import { Dimensions, StyleSheet } from 'react-native';
import { FontFamily, Theme } from '../../constants/theme.ts';

export default (theme: Theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    imgContainer: {
      marginTop: Dimensions.get('window').height / 9,
      alignItems: 'center',
      width: '78%',
      aspectRatio: 262 / 271,
    },
    img: {
      width: '100%',
    },
    title: {
      fontFamily: FontFamily.bold,
      fontSize: 24,
      textAlign: 'center',
      color: theme.text,
      marginTop: 42,
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
