import React, { useEffect, useState } from 'react';

export const useLocalStorage = (itemName, initValue) => {
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initValue);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (err) {
      setError(true);
    }
  };

  return { item, saveItem, loading, error };
};
