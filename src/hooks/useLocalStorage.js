import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error(
      'Invalid Params: useLocalStorage should receive a string for the first argument'
    );
  }

const [storedValue, setStoredValue] = useState(() => {
  try{

    const item = window.localStorage.getItem(key);
  
    return item ? JSON.parse(item) : initialValue;
  }
  
  catch(error){
    return initialValue
  }
});

const setValue = value => {
  setStoredValue(value);

  window.localStorage.setItem(key, JSON.stringify(value))
}


return [storedValue, setValue];
}