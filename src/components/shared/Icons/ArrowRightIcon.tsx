import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext.tsx';

export const ArrowRightIcon = () => {
  const { theme } = useTheme();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 8 13" fill="none">
      <Path
        d="M7.713 6.00001L1.702 -0.00999451L0.288 1.40401L4.888 6.00401L0.288 10.597L1.702 12.011L7.713 6.00001Z"
        fill={theme.text}
      />
    </Svg>
  );
};
