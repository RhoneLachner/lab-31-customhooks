import React, { createContext, useContext, useState } from 'react';
import styles from '../containers/containers.css';


export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const selectTheme = (currentTheme) => {
    if(currentTheme === 'dark') setTheme('dark');
    else setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, selectTheme 
    }}>
      <div className={styles[theme]}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, selectTheme } = useContext(ThemeContext);
  return { theme, selectTheme };
};

