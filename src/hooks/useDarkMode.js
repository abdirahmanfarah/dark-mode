import { useLocalStorage } from './useLocalStorage';

import React, { useEffect } from 'react';

const useDarkMode = (key, initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

  const handleChanges = e => {
    setSomeValue(e.target.someValue)
  };

  useEffect (() => {
    someValue ? document.querySelector('body').classList.add('dark-mode')
    : document.querySelector('body').classList.removed('dark-mode')
  }, [someValue])
  return [someValue, handleChanges, setSomeValue]
}

export default useDarkMode;