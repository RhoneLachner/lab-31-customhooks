import React, { useState, useEffect } from 'react';
import { getVillagers } from '../villagers/villagerApi';
import VillagerList from '../villagers/VillagerList';
import Header from '../Header';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers().then((res) => {
      setVillagers(res);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>loading</h1>;
  else return <>
    <Header></Header>
    <VillagerList villagers={villagers} /> </>;
};

export default Home;


