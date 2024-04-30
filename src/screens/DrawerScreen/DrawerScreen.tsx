import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext.tsx';
import styles from './styles.ts';
import { ArrowRightIcon } from '../../components/shared/Icons/ArrowRightIcon.tsx';
import { PersonIcon } from '../../components/shared/Icons/PersonIcon.tsx';
import { DarkModeIcon } from '../../components/shared/Icons/DarkModeIcon.tsx';
import { SunIcon } from '../../components/shared/Icons/SunIcon.tsx';
import { MenuItem } from './components/MenuItem/MenuItem.tsx';
import { BellIcon } from '../../components/shared/Icons/BellIcon.tsx';
import { LogoutIcon } from '../../components/shared/Icons/LogoutIcon.tsx';

export const DrawerScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const s = styles(theme);

  return (
    <View style={s.menu}>
      <TouchableOpacity style={s.account}>
        <View style={s.accountContent}>
          <View style={s.avatar}>
            <View style={s.placeholder}>
              <View style={s.personIcon}>
                <PersonIcon />
              </View>
            </View>
          </View>
          <View style={s.accountInfo}>
            <Text style={s.name}>Name Surname</Text>
            <Text style={s.username}>@artemykairyak</Text>
          </View>
        </View>
        <View style={s.arrow}>
          <ArrowRightIcon />
        </View>
      </TouchableOpacity>
      <View style={s.items}>
        <MenuItem
          text="Toggle theme"
          icon={isDarkMode ? <DarkModeIcon /> : <SunIcon />}
          onPress={toggleTheme}
          disableArrow
        />
        <MenuItem text="Notifications" icon={<BellIcon />} onPress={() => {}} />
      </View>
      <MenuItem text="Logout" icon={<LogoutIcon />} onPress={() => {}} />
    </View>
  );
};
