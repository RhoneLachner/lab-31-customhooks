/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../containers/containers.css';
import { useTheme } from '../state/themeContext';

const Header = () => {
  const { theme, selectTheme } = useTheme();

  const toggle = ({ target }) => {
    if(target.checked) selectTheme('light');
    else selectTheme('dark');
  };


  return (
    <div className={styles[theme]}>
      <div className={styles.headerDiv}>
        <h2>Animal Crossing Villager Station</h2>
        <div>
          <NavLink to="/" exact activeStyle={{ display: 'none' }}><h3>Back to Home</h3></NavLink>
        </div> 
        <div>
      ☀ <input type="checkbox" className="toggleButton" onChange={toggle}></input> ☾
        </div>
      </div>
    </div>
  );
};

export default Header;
