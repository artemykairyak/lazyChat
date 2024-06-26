import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext.tsx';

export const BellIcon = () => {
  const { theme } = useTheme();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 16 20" fill="none">
      <Path
        d="M8 20C6.89543 20 6 19.1046 6 18H10C10 19.1046 9.10457 20 8 20ZM16 17H0V15L2 14V8.5C2 5.038 3.421 2.793 6 2.18V0H10V2.18C12.579 2.792 14 5.036 14 8.5V14L16 15V17ZM8 3.75C6.77967 3.6712 5.60278 4.21728 4.875 5.2C4.25255 6.18456 3.94714 7.33638 4 8.5V15H12V8.5C12.0528 7.33639 11.7474 6.18458 11.125 5.2C10.3972 4.21728 9.22033 3.6712 8 3.75Z"
        fill={theme.text}
      />
    </Svg>
  );
};
