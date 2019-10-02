import { useLocalStorage } from './useLocalStorage';

import React, { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

  // const handleChanges = e => {
  //   setSomeValue(e.target.someValue)
  // };

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
