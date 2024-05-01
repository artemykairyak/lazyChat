import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles.ts';
import { useTheme } from '../../context/ThemeContext.tsx';
import { getMessageDate } from '../../utils/utils.ts';

interface ContactProps {
  name: string;
  bottomText: string;
  avatar: string;
  online: boolean;
  date?: string;
  unreadCount?: number;
}

export const Contact = ({
  name,
  avatar,
  online,
  bottomText,
  unreadCount,
  date,
}: ContactProps) => {
  const { theme } = useTheme();
  const s = styles(theme);

  return (
    <TouchableOpacity activeOpacity={0.8} style={s.contact}>
      <View style={s.contactFields}>
        <View style={s.avatarWrapper}>
          <Image style={s.avatar} src={avatar} />
          {online && <View style={s.online} />}
        </View>
        <View style={s.info}>
          <Text style={s.name}>{name}</Text>
          <Text style={s.status}>{bottomText}</Text>
        </View>
      </View>
      {date && (
        <View style={s.messageFields}>
          <Text style={s.date}>{getMessageDate(date)}</Text>
          {unreadCount && <Text style={s.unreadCount}>{unreadCount}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};
