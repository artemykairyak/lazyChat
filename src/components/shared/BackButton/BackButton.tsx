import { Text, TouchableOpacity, View } from 'react-native';
import { useAppNavigation } from '../../../hooks/useAppNavigation.tsx';
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon.tsx';
import styles from './styles.ts';
import { useTheme } from '../../../context/ThemeContext/ThemeContext.tsx';

interface BackButtonProps {
  text: string;
  onPress?: () => void;
}

export const BackButton = ({ text, onPress }: BackButtonProps) => {
  const navigation = useAppNavigation();
  const { theme } = useTheme();
  const s = styles(theme);

  return (
    <TouchableOpacity
      style={s.btn}
      onPress={() => {
        onPress ? onPress() : navigation.goBack();
      }}
    >
      <View style={s.wrapper}>
        <View style={s.icon}>
          <ArrowLeftIcon />
        </View>
        <Text style={s.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
