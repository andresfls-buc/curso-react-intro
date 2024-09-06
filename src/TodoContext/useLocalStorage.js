import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);

    // Cleanup function to clear timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [itemName, initialValue]); // Empty array ensures the effect runs only once

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// localStorage.removeItem("TODOS_V1");
// const defaultTodos = [
//   { text: "Defeat all enemies", completed: true },
//   { text: "Tomar el curso de Intro a React.js", completed: false },
//   { text: "Defeat Griffith", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
