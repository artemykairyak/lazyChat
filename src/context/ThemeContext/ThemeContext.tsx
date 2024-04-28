import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { darkTheme, lightTheme } from '../../constants/colors.ts';

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  isDarkMode: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
