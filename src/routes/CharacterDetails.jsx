import React from 'react';

export default function CharacterDetails({ character }) {

  //REFACTOR: Remove try/catch when images are complete
  try {
    var characterImage = require(`../assets/images/${character.name}.jpg`);
  } catch (err) {
    console.log(err);
  }

  console.log(characterImage);

  return (
    <div id="character-details">
      <div id="character-info">
        <h1>{character.name}</h1>
        <nav>{`${character.name} Overview`}</nav>
        <nav>{`${character.name} Moves`} </nav>
        <nav>{`${character.name} Changes`}</nav>
      </div>
      {/* TODO: figure out how to handle non-existant images */}
      {/* <img id="character-image"src={`${characterImage}`} alt={`${character.name}`}></img> */}
    </div>
  );
}
