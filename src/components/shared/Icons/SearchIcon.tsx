import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext.tsx';

export const SearchIcon = ({ color }: { color?: string }) => {
  const { theme } = useTheme();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 18 17" fill="none">
      <Path
        d="M15.677 16.607L9.96198 10.891C7.41965 12.6984 3.91642 12.2563 1.90285 9.87392C-0.110711 7.4915 0.0371394 3.96358 2.24298 1.75799C4.44824 -0.448564 7.97651 -0.597054 10.3594 1.4164C12.7422 3.42986 13.1846 6.93344 11.377 9.47599L17.092 15.192L15.678 16.606L15.677 16.607ZM6.48498 1.99997C4.58868 1.99955 2.95267 3.33066 2.56745 5.18742C2.18224 7.04418 3.15369 8.91626 4.89366 9.67023C6.63362 10.4242 8.66388 9.85282 9.75522 8.30204C10.8466 6.75126 10.699 4.64731 9.40198 3.26399L10.007 3.86399L9.32498 3.18399L9.31298 3.17199C8.56477 2.41917 7.54637 1.99712 6.48498 1.99997Z"
        fill={color ? color : theme.text}
      />
    </Svg>
  );
};
