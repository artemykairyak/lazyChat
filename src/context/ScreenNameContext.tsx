import { createContext, FC, PropsWithChildren, useState } from 'react';

export const ScreenNameContext = createContext({
  activeScreenName: '',
  setActiveScreenName: (name: string) => {},
});

export const ActiveScreenNameProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [activeScreenName, setActiveScreenName] = useState('Contacts');

  return (
    <ScreenNameContext.Provider
      value={{ activeScreenName, setActiveScreenName }}
    >
      {children}
    </ScreenNameContext.Provider>
  );
};
