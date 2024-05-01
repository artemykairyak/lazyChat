import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext.tsx';

export const PlusIcon = () => {
  const { theme } = useTheme();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
      <Path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill={theme.text} />
    </Svg>
  );
};
