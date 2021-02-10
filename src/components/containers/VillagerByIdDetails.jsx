import React from 'react';
import { useVillagerById } from '../hooks/villagerById';
import VillagerDetails from '../villagers/VillagerDetails';
import PropTypes from 'prop-types';

const VillagerByIdDetails = ({ match }) => {
  const { loading, villager } = useVillagerById(match.params._id);

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

VillagerByIdDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default VillagerByIdDetails;
