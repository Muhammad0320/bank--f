import { createContext, ReactNode } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

interface DarkModeType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeType | null>(null);




export const DarkModeContextProvider = ({children: ReactNode}) => {
    
    const [ isDarkMode, setIsDarkMode ] = useLocalStorageState(false, 'isDarkMode');

    if(typeof setIsDarkMode !== 'function')  return 

    if(typeof isDarkMode !== 'boolean') return

      const toggleDarkMode = ( ) => setIsDarkMode(mode => !mode);


      const value: DarkModeType = {

        isDarkMode,
        toggleDarkMode


      }


      
  
      return <DarkModeContext.Provider> 
                
      </DarkModeContext.Provider>


};