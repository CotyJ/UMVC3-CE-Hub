import React from 'react';

import { Link, Outlet } from 'react-router-dom';

export default function CharacterDetails({ character }) {
  //TODO: (Data Entry) Remove try/catch when images are complete
  try {
    var characterImage = require(`../assets/images/character_images/${character.name}.jpg`);
  } catch (err) {
    // console.log(err);
  }

  return (
    <div id="character-details">
      <div id="character-info">
        <h1 id="character-name">{character.name}</h1>

        <div className="character-links">
          <Link to={`/${character.id}/overview`}>Overview</Link>
          <Link to={`/${character.id}/moves`}>Moves</Link>
          <Link to={`/${character.id}/changelog`}>Changelog</Link>
        </div>
      </div>
      {/* TODO: (Styling) fix image appearance */}
      {/* <img id="character-image"src={`${characterImage}`} alt={`${character.name}`}></img> */}
      <Outlet />
    </div>
  );
}
