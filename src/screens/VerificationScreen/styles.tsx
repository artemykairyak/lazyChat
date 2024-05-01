import { Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme.ts';

const screenHeight = Dimensions.get('window').height;

export default (theme: Theme, keyboardIsOpen: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.background,
    },
    view: {
      paddingHorizontal: 24,
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingTop: 46,
    },
    controls: {
      alignItems: 'center',
      width: '100%',
      marginTop: keyboardIsOpen ? screenHeight / 12 : screenHeight / 5,
    },
    circle: {
      width: 100,
      height: 100,
      borderRadius: 100,
    },
    photo: {
      backgroundColor: theme.secondary,
      borderRadius: 100,
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    avatar: {
      borderRadius: 100,
      flex: 1,
      width: '100%',
    },
    personIcon: {
      width: 40,
    },
    plusIcon: {
      width: 24,
      height: 24,
      position: 'absolute',
      bottom: 2,
      right: 0,
    },
    inputs: {
      marginTop: 30,
      width: '100%',
      gap: 12,
    },

    btn: {
      width: '100%',
    },
  });
