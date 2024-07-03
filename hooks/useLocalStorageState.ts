import { useState } from 'react';

export const useLocalStorageState = (initialState: boolean, key: string) => {
  const [value, setValue] = useState<{ isDarkMode: boolean }>(function () {
    const storageItem = localStorage.getItem(key);

    return storageItem ? JSON.parse(storageItem) : initialState;
  });
};
