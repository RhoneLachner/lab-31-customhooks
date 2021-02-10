import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { getVillagerById } from '../villagers/villagerApi';

export const useVillagerById = (id) => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillagersById] = useState([]);
  

  
  useEffect(() => {
    getVillagerById(id).then((res) => {
      setVillagersById(res);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    villager
  };
};
