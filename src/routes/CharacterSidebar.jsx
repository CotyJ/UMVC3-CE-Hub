import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterSidebar({ characterData }) {
  const marvelCharacters = characterData.filter(
    (character) => character.series === 'marvel'
  );
  const capcomCharacters = characterData.filter(
    (character) => character.series === 'capcom'
  );

  // console.log(characterData);
  // console.log(marvelCharacters);
  // console.log(capcomCharacters);

  return (
    <>
      <div id="character-selector">
        <div>

          <h2 id="marvel">Marvel</h2>
          <ul>
            {marvelCharacters.map((character) => (
              <li key={character.name}>
                <Link key={character.id} to={`/${character.id}/overview`}>
                  <div className="character-tile">{character.name}</div>
                </Link>
              </li>
            ))}
          </ul>

          <h2 id="capcom">Capcom</h2>
          <ul>
            {capcomCharacters.map((character) => (
              <li key={character.name}>
                <Link key={character.id} to={`/${character.id}/overview`}>
                  <div className="character-tile">{character.name}</div>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};
