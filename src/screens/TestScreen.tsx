import { Button, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import s from '../../styles.ts';
import { useTheme } from '../context/ThemeContext/ThemeContext';

export const TestScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const styles = s(theme);
  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button title={'change theme'} onPress={toggleTheme} />
    </SafeAreaView>
  );
};
