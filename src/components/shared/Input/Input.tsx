import { TextInput, View } from 'react-native';
import { ReactNode } from 'react';
import styles from './styles.ts';
import { useTheme } from '../../../context/ThemeContext.tsx';

interface InputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  style?: Style;
  icon?: ReactNode;
  secure?: boolean;
}

export const Input = ({
  value,
  placeholder,
  onChange,
  icon,
  style,
  secure = false,
}: InputProps) => {
  const { theme } = useTheme();
  const s = styles(theme, !!icon);

  return (
    <View style={s.wrapper}>
      {icon && <View style={s.icon}>{icon}</View>}
      <TextInput
        secureTextEntry={secure}
        style={{ ...s.input, ...style }}
        placeholder={placeholder}
        placeholderTextColor={theme.disabled}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
