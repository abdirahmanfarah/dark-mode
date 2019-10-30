import React, { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkmode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    setValue ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.removed('dark-mode')
  }, [value, setValue])

  return [value, setValue]
}