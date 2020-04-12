import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setVal] = useState(defaultValue);

  useEffect(() => {
    localStorage.clear();
    let newValue = defaultValue;
    const storedValue = localStorage.getItem(key);
    newValue = storedValue ? JSON.parse(storedValue) : defaultValue;
    setVal(newValue);
  }, []);

  const setValue = (valToStore) => {
    setVal(valToStore);
    localStorage.setItem(key, JSON.stringify(valToStore));
  };

  return [value, setValue];
}
