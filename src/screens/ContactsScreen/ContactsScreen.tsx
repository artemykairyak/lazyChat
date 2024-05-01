import { ScrollView, View } from 'react-native';
import styles from './styles.ts';
import { useTheme } from '../../context/ThemeContext.tsx';
import { SearchIcon } from '../../components/shared/Icons/SearchIcon.tsx';
import { Input } from '../../components/shared/Input/Input.tsx';
import { useState } from 'react';
import { Contact } from '../../components/Contact/Contact.tsx';

const contact: { name: string; avatar: string } = {
  name: 'Artemy Kairyak',
  avatar:
    'https://www.researchgate.net/publication/349716424/figure/fig12/AS:996972131520525@1614708087153/A-non-existing-cat-photo-realistic-image-produced-by-a-Generative-Adversarial-Network.ppm',
};

export const ContactsScreen = () => {
  const { theme } = useTheme();
  const s = styles(theme);
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={s.view}>
      <View style={s.search}>
        <Input
          value={searchValue}
          icon={
            <View style={s.searchIcon}>
              <SearchIcon color={theme.disabled} />
            </View>
          }
          onChange={(v) => setSearchValue(v)}
          placeholder="Search"
        />
      </View>
      <ScrollView style={s.contacts}>
        {new Array(10).fill(contact).map((item, i) => {
          return (
            <Contact
              key={i}
              name={item.name}
              bottomText="kek"
              avatar={item.avatar}
              online={true}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
