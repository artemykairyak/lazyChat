import { Text, View } from 'react-native';
import { useNavigationState } from '@react-navigation/core';
export const DrawerHeader = () => {
  const kek = useNavigationState((state) => state);
  console.log(kek);
  return (
    <View>
      <Text>header</Text>
    </View>
  );
};
