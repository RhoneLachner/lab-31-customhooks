/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../containers/containers.css';

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <h2>Animal Crossing Villager Station</h2>
      <div>
        <NavLink to="/" exact activeStyle={{ display: 'none' }}><h3>Back to Home</h3></NavLink>
      </div> 
    </div>
  );
};

export default Header;
