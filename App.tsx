import {
  ThemeProvider,
  useTheme,
} from './src/context/ThemeContext/ThemeContext.tsx';
import { OnBoardingScreen } from './src/screens/OnBoardingScreen/OnBoardingScreen.tsx';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import s from './styles.ts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VerificationScreen } from './src/screens/VerificationScreen/VerificationScreen.tsx';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

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

  return (
    <SafeAreaView style={styles.surface}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default App;
