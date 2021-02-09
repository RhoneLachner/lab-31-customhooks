/* eslint-disable max-len */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../components/containers/containers.css';

export default class Header extends Component {
  render() {
    return (
     
      <>
        <div className={styles.headerDiv}>
          <h2>Animal Crossing Villager Station</h2>
           
          <div>
            <NavLink to="/" exact activeStyle={{ display: 'none' }}><h3>Back to Home</h3></NavLink>
          </div>
            
        </div>
      </>
   
    );
  }
}

