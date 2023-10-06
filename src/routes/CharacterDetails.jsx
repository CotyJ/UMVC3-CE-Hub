import React from 'react';

import CharacterChangelog from './CharacterChangelog';
import CharacterMoves from './CharacterMoves';
import CharacterOverview from './CharacterOverview';
import { Link } from 'react-router-dom';

export default function CharacterDetails({ character }) {
  //REFACTOR: Remove try/catch when images are complete
  try {
    var characterImage = require(`../assets/images/${character.name}.jpg`);
  } catch (err) {
    console.log(err);
  }

  return (
    <div id="character-details">
      <div id="character-info">
        <h1>{character.name}</h1>

        <Link to={`/${character.id}/overview`}>Overview</Link>
        <Link to={`/${character.id}/moves`}>Moves</Link>
        <Link to={`/${character.id}/changelog`}>Changelog</Link>

      </div>
      {/* TODO: figure out how to handle non-existant images */}
      {/* <img id="character-image"src={`${characterImage}`} alt={`${character.name}`}></img> */}
    </div>
  );
}
