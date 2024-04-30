import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingScreen } from '../screens/OnBoardingScreen/OnBoardingScreen.tsx';
import { VerificationScreen } from '../screens/VerificationScreen/VerificationScreen.tsx';
const Stack = createNativeStackNavigator();

export const RegistrationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
    </Stack.Navigator>
  );
};
