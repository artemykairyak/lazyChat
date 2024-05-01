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
import { ContactsIcon } from '../components/shared/Icons/ContactsIcon.tsx';
import { ChatsIcon } from '../components/shared/Icons/ChatsIcon.tsx';
import { ReactNode } from 'react';
import styles from './styles.ts';
import { PlusIcon } from '../components/shared/Icons/PlusIcon.tsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const BottomTabNavigator = () => {
  const { setActiveScreenName } = useActiveScreenName();
  const { theme } = useTheme();
  const s = styles(theme);

  const icons = (focused: boolean): Record<string, ReactNode> => {
    const color = focused ? theme.primary : theme.disabled;

    return {
      Contacts: (
        <View style={s.tabBarIcon}>
          <ContactsIcon color={color} />
        </View>
      ),
      Chats: (
        <View style={s.tabBarIcon}>
          <ChatsIcon color={color} />
        </View>
      ),
    };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: s.tabBar,
        tabBarItemStyle: s.tabBarItem,
        tabBarActiveTintColor: theme.primary,
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              style={{
                ...s.tabBarLabel,
                color: focused ? theme.primary : theme.disabled,
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
  const s = styles(theme);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: activeScreenName,
        headerTitleStyle: s.headerTitle,
        headerStyle: s.header,
        headerTintColor: theme.text,
        headerTitleContainerStyle: s.headerTitleContainer,
        headerRight: () => (
          <TouchableOpacity style={s.headerRight} activeOpacity={0.8}>
            <PlusIcon />
          </TouchableOpacity>
        ),
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
