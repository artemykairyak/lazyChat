import {
  ThemeProvider,
  useTheme,
} from './src/context/ThemeContext/ThemeContext.tsx';
import { OnBoardingScreen } from './src/screens/OnBoardingScreen/OnBoardingScreen.tsx';
import { SafeAreaView, StatusBar } from 'react-native';
import { ReactNode } from 'react';
import s from './styles.ts';

const App = (): Element => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = (): ReactNode => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const styles = s(theme);

  return (
    <SafeAreaView style={styles.surface}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <OnBoardingScreen />
    </SafeAreaView>
  );
};

export default App;
