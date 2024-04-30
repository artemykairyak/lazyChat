import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { darkTheme, lightTheme } from '../../constants/theme.ts';

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  setTheme: (thm: 'dark' | 'light') => {},
  isDarkMode: false,
});

const systemThemeObj = {
  dark: darkTheme,
  light: lightTheme,
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, _setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    _setTheme(theme === lightTheme ? darkTheme : lightTheme);
    setIsDarkMode((prev) => !prev);
  };

  const setTheme = (thm: 'dark' | 'light') => {
    _setTheme(systemThemeObj[thm]);
    setIsDarkMode(thm === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
