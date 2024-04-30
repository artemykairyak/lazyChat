import { Animated, Easing, Text, View } from 'react-native';
import React from 'react';
import styles from './styles.ts';
import { useTheme } from '../../context/ThemeContext/ThemeContext.tsx';
import { useAppNavigation } from '../../hooks/useAppNavigation.tsx';
import { WelcomePic } from './components/WelcomePic/WelcomePic.tsx';
import { PrimaryButton } from '../../components/shared/PrimaryButton/PrimaryButton.tsx';

export const OnBoardingScreen = () => {
  const navigation = useAppNavigation();
  const { theme } = useTheme();
  const s = styles(theme);

  const imgTranslateX = new Animated.Value(-100);
  const titleTranslateX = new Animated.Value(100);
  const opacity = new Animated.Value(0.2);

  const animationConfig = {
    toValue: 0,
    duration: 800,
    easing: Easing.out(Easing.exp),
    useNativeDriver: true,
  };

  React.useEffect(() => {
    Animated.timing(imgTranslateX, animationConfig).start();
    Animated.timing(titleTranslateX, animationConfig).start();
    Animated.timing(opacity, { ...animationConfig, toValue: 1 }).start();
  }, []);

  return (
    <View style={s.view}>
      <View style={s.imgContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: imgTranslateX }],
            opacity,
            ...s.img,
          }}
        >
          <View style={s.img}>
            <WelcomePic />
          </View>
        </Animated.View>
        <Animated.Text
          style={[
            s.title,
            { transform: [{ translateX: titleTranslateX }], opacity },
          ]}
        >
          <Text style={s.title}>
            Connect easily with your family and friends over countries
          </Text>
        </Animated.Text>
      </View>
      <View style={s.bottomControls}>
        <Text style={s.policy}>Terms & Privacy Policy</Text>
        <PrimaryButton
          text="Start Messaging"
          onPress={() => navigation.navigate('VerificationScreen')}
        />
      </View>
    </View>
  );
};
