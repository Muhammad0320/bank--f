import { createContext } from 'react';

interface DarkModeType {
  isDarkMode: boolean;
  toggoleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeType | null>(null);
