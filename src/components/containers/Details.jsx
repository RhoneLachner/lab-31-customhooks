import React from 'react';
import { useVillagerById } from '../hooks/villagerById';
import VillagerDetails from '../villagers/VillagerDetails';

const Details = () => {
  const { loading, villager } = useVillagerById();

  if(loading) return <h1>loading</h1>;
  return <>
    <VillagerDetails 
      name={villager.name} 
      image={villager.image}
      quote={villager.quote}
      skill={villager.skill}
      birthday={villager.birthday}
    />
  </>;
};

export default Details;
