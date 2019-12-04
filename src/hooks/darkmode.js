import React, { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkmode = (key, initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

  useEffect (() => {
    try{

      someValue ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.removed('dark-mode')
    }
    catch(error) {
      return setSomeValue
    }

  }, [someValue, setSomeValue])
  return [someValue, setSomeValue]
}