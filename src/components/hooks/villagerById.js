import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVillagerById } from '../villagers/villagerApi';

export const useVillagerById = () => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillagersById] = useState([]);
  
  const { _id } = useParams();
  
  useEffect(() => {
    getVillagerById(_id).then((res) => {
      setVillagersById(res);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    villager
  };
};
