import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/core';

export const useAppNavigation: () => NavigationProp<ParamListBase> =
  useNavigation;
