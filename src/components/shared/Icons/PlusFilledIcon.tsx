import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext.tsx';

export const PlusFilledIcon = () => {
  const { theme } = useTheme();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 20C4.47967 19.994 0.00606237 15.5204 0 10V9.80002C0.109931 4.30455 4.63459 -0.0720257 10.1307 0.000898217C15.6268 0.0738221 20.0337 4.5689 19.9978 10.0654C19.9619 15.5618 15.4966 19.9989 10 20ZM5 9.00002V11H9V15H11V11H15V9.00002H11V5.00002H9V9.00002H5Z"
        fill={theme.text}
      />
    </Svg>
  );
};
