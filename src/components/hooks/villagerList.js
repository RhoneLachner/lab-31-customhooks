import  { useState, useEffect } from 'react';
import { getVillagers } from '../villagers/villagerApi';

export const useVillagerList = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);
  
  useEffect(() => {
    getVillagers().then((res) => {
      setVillagers(res);
      setLoading(false);
    });
  }, []);
  
  return {
    loading,
    villagers
  };
};
