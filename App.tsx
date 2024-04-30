import { ThemeProvider, useTheme } from './src/context/ThemeContext.tsx';
import { SafeAreaView, StatusBar } from 'react-native';
import s from './styles.ts';
import { NavigationContainer } from '@react-navigation/native';
import { RegistrationStack } from './src/stacks/RegistrationStack.tsx';
import { MainStack } from './src/stacks/MainStack.tsx';
import 'react-native-gesture-handler';

const App = (): Element => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </NavigationContainer>
  );
};

const ThemedApp = () => {
  const { theme, isDarkMode, setTheme } = useTheme();
  const styles = s(theme);

  // todo: implement
  const isAuth = true;

  return (
    <SafeAreaView style={styles.surface}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      {isAuth ? <MainStack /> : <RegistrationStack />}
    </SafeAreaView>
  );
};

export default App;
