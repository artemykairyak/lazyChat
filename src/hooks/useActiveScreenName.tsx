import { useContext } from 'react';
import { ScreenNameContext } from '../context/ScreenNameContext.tsx';

export const useActiveScreenName = () => {
  return useContext(ScreenNameContext);
};
