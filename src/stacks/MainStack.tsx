import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactsScreen } from '../screens/ContactsScreen/ContactsScreen.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ChatsScreen } from '../screens/ChatsScreen/ChatsScreen.tsx';
import { DrawerScreen } from '../screens/DrawerScreen/DrawerScreen.tsx';
import { ActiveScreenNameProvider } from '../context/ScreenNameContext.tsx';
import { Text, TouchableOpacity, View } from 'react-native';
import { useActiveScreenName } from '../hooks/useActiveScreenName.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { FontFamily } from '../constants/theme.ts';
import { ContactsIcon } from '../components/shared/Icons/ContactsIcon.tsx';
import { ChatsIcon } from '../components/shared/Icons/ChatsIcon.tsx';
import { ReactNode } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const BottomTabNavigator = () => {
  const { setActiveScreenName } = useActiveScreenName();
  const { theme } = useTheme();

  const icons = (focused: boolean): Record<string, ReactNode> => {
    const color = focused ? theme.primary : theme.text;

    return {
      Contacts: (
        <View style={{ width: 22, height: 22 }}>
          <ContactsIcon color={color} />
        </View>
      ),
      Chats: (
        <View style={{ width: 22, height: 22 }}>
          <ChatsIcon color={color} />
        </View>
      ),
    };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 57 },
        tabBarItemStyle: {
          paddingBottom: 5,
          backgroundColor: theme.background,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                fontFamily: FontFamily.semiBold,
                color: focused ? theme.primary : theme.text,
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({ focused }) => icons(focused)[route.name],
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            activeOpacity={0.9}
            onPress={(e) => {
              setActiveScreenName(route.name);
              props.onPress && props.onPress(e);
            }}
          />
        ),
        ...screenOptions,
      })}
      initialRouteName="Contacts"
    >
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
    </Tab.Navigator>
  );
};

// const _Stack = () => (
//   <Stack.Navigator screenOptions={screenOptions}>
//     <Stack.Screen name="Main" component={BottomTabNavigator} />
//   </Stack.Navigator>
// );

const DrawerNavigator = () => {
  const { activeScreenName } = useActiveScreenName();
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: activeScreenName,
        headerTitleStyle: {
          color: theme.text,
          fontFamily: FontFamily.semiBold,
          fontSize: 18,
        },
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
        headerTitleContainerStyle: { marginLeft: 0 },
      }}
      drawerContent={(props) => <DrawerScreen />}
    >
      <Drawer.Screen name="Root" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export const MainStack = () => {
  return (
    <ActiveScreenNameProvider>
      <DrawerNavigator />
    </ActiveScreenNameProvider>
  );
};
