import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext/ThemeContext.tsx';
import { TestScreen } from './src/screens/TestScreen.tsx';

const App = (): Element => {
  return (
    <ThemeProvider>
      <TestScreen />
    </ThemeProvider>
  );
};

export default App;
