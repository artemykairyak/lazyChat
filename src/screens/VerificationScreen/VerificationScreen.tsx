import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles.tsx';
import { useTheme } from '../../context/ThemeContext/ThemeContext.tsx';
import { PersonIcon } from '../../components/shared/Icons/PersonIcon.tsx';
import { PlusFilledIcon } from '../../components/shared/Icons/PlusFilledIcon.tsx';
import { PrimaryButton } from '../../components/shared/PrimaryButton/PrimaryButton.tsx';
import { useKeyboard } from '../../hooks/useKeyboard.tsx';
import { useState } from 'react';

export const VerificationScreen = () => {
  const { theme } = useTheme();
  const { keyboardIsOpen, closeKeyboard } = useKeyboard();
  const s = styles(theme, keyboardIsOpen);

  const [data, setData] = useState({ name: '', surname: '' });

  const onChangeInputValue = (fieldName: string) => (value: string) => {
    setData((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <View style={s.container}>
      <View style={s.view}>
        <View style={s.controls}>
          <TouchableOpacity style={s.circle} activeOpacity={0.7}>
            <>
              <View style={s.personIcon}>
                <PersonIcon />
              </View>
              <View style={s.plusIcon}>
                <PlusFilledIcon />
              </View>
            </>
          </TouchableOpacity>
          <View style={s.inputs}>
            <TextInput
              style={s.input}
              placeholder="First Name (Required)"
              placeholderTextColor={theme.disabled}
              value={data.name}
              onChangeText={onChangeInputValue('name')}
            />
            <TextInput
              style={s.input}
              placeholder="Last Name (Optional)"
              placeholderTextColor={theme.disabled}
              value={data.surname}
              onChangeText={onChangeInputValue('surname')}
            />
          </View>
        </View>
        <PrimaryButton text="Save" style={s.btn} onPress={closeKeyboard} />
      </View>
    </View>
  );
};
