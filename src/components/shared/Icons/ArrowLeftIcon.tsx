import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext.tsx';

export const ArrowLeftIcon = () => {
  const { theme } = useTheme();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.28799 12L14.298 18.01L15.712 16.596L11.112 11.996L15.712 7.39599L14.298 5.98999L8.28799 12Z"
        fill={theme.text}
      />
    </Svg>
  );
};
