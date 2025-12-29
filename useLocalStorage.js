import { useState } from "react";

export function useLocalStorage(key, initialData) {
  const storedData = localStorage.getItem(key);

  const [data, setData] = useState(
    storedData ? JSON.parse(storedData) : initialData
  );

  const updateLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, updateLocalStorage];
}
