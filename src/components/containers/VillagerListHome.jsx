import React from 'react';
import { useVillagerList } from '../hooks/villagerListHome';
import VillagerList from '../villagers/VillagerList';

const VillagerListHome = () => {
  const { loading, villagers } = useVillagerList();
  
  if(loading) return <h1>loading</h1>;
  else return <>
    <VillagerList villagers={villagers} /> </>;
};
  
export default VillagerListHome;
