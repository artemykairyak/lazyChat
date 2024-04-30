import { Text, TouchableOpacity, View } from 'react-native';
import { ReactNode } from 'react';
import styles from './style.ts';
import { useTheme } from '../../../../context/ThemeContext.tsx';
import { ArrowRightIcon } from '../../../../components/shared/Icons/ArrowRightIcon.tsx';

interface MenuItemProps {
  text: string;
  onPress: VoidFunction;
  icon: ReactNode;
  style?: Style;
  disableArrow?: boolean;
}

export const MenuItem = ({
  icon,
  onPress,
  text,
  style,
  disableArrow,
}: MenuItemProps) => {
  const { theme } = useTheme();
  const s = styles(theme);

  return (
    <TouchableOpacity onPress={onPress} style={{ ...s.item, ...style }}>
      <View style={s.content}>
        <View style={s.textContent}>
          <View style={s.icon}>{icon}</View>
          <Text style={s.text}>{text}</Text>
        </View>
        {!disableArrow && (
          <View style={s.arrow}>
            <ArrowRightIcon />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
