import { Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { useTheme } from '../../../context/ThemeContext/ThemeContext.tsx';
import styles from './styles.ts';

interface PrimaryButtonProps {
  text: string;
  onPress: VoidFunction;
  style?: Style;
}

export const PrimaryButton = ({ text, onPress, style }: PrimaryButtonProps) => {
  const { theme } = useTheme();
  const s = styles(theme);

  return (
    <TouchableHighlight
      style={{ ...s.btn, ...style }}
      underlayColor={theme.alternativePrimary}
      onPress={onPress}
    >
      <Text style={s.btnText}>{text}</Text>
    </TouchableHighlight>
  );
};
