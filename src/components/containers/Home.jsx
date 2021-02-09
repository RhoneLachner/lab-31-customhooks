import React from 'react';
import { useVillagerList } from '../hooks/villagerList';
import VillagerList from '../villagers/VillagerList';

const Home = () => {
  const { loading, villagers } = useVillagerList();
  
  
  if(loading) return <h1>loading</h1>;
  else return <>
    <VillagerList villagers={villagers} /> </>;
};
  
export default Home;
