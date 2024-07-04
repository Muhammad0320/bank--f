import { createContext, type ReactNode } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

interface DarkModeType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeType | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode');

  if (typeof setIsDarkMode !== 'function') return;

  if (typeof isDarkMode !== 'boolean') return;

  const toggleDarkMode = () => setIsDarkMode(mode => !mode);

  const value: DarkModeType = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {' '}
      {children}{' '}
    </DarkModeContext.Provider>
  );
};
