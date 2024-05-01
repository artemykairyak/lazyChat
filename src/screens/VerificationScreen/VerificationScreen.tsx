import { ImageBackground, TouchableOpacity, View } from 'react-native';
import styles from './styles.tsx';
import { useTheme } from '../../context/ThemeContext.tsx';
import { PersonIcon } from '../../components/shared/Icons/PersonIcon.tsx';
import { PlusFilledIcon } from '../../components/shared/Icons/PlusFilledIcon.tsx';
import { PrimaryButton } from '../../components/shared/PrimaryButton/PrimaryButton.tsx';
import { useKeyboard } from '../../hooks/useKeyboard.tsx';
import { useState } from 'react';
import { Input } from '../../components/shared/Input/Input.tsx';
import { launchImageLibrary } from 'react-native-image-picker';

const options = {
  mediaType: 'photo',
  maxWidth: 200,
  maxHeight: 200,
  quality: 1,
};

export const VerificationScreen = () => {
  const { theme } = useTheme();
  const { keyboardIsOpen, closeKeyboard } = useKeyboard();
  const s = styles(theme, keyboardIsOpen);

  const [data, setData] = useState({ username: '', name: '', password: '' });
  const [photoUri, setPhotoUri] = useState('');

  const onChangeInputValue = (fieldName: string) => (value: string) => {
    setData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handlePhotoSelect = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    });
    setPhotoUri((result.assets && result.assets[0].uri) || '');
  };

  return (
    <View style={s.container}>
      <View style={s.view}>
        <View style={s.controls}>
          <TouchableOpacity
            style={{ ...s.circle, overflow: photoUri ? 'hidden' : 'visible' }}
            activeOpacity={0.7}
            onPress={handlePhotoSelect}
          >
            {photoUri ? (
              <ImageBackground
                source={{ uri: photoUri }}
                style={s.avatar}
                resizeMode="cover"
              />
            ) : (
              <View style={s.photo}>
                <View style={s.personIcon}>
                  <PersonIcon />
                </View>
                <View style={s.plusIcon}>
                  <PlusFilledIcon />
                </View>
              </View>
            )}
          </TouchableOpacity>
          <View style={s.inputs}>
            <Input
              value={data.username}
              placeholder="Username"
              onChange={onChangeInputValue('username')}
            />
            <Input
              value={data.name}
              placeholder="Name"
              onChange={onChangeInputValue('name')}
            />
            <Input
              value={data.password}
              placeholder="Password"
              secure
              onChange={onChangeInputValue('password')}
            />
          </View>
        </View>
        <PrimaryButton text="Save" style={s.btn} onPress={closeKeyboard} />
      </View>
    </View>
  );
};
