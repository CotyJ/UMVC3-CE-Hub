import React, { useState, useEffect } from 'react';

export default function CharacterOverview({ overview, author, id }) {
  const [characterGif, setCharacterGif] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const importImage = async () => {
      try {
        const { default: gif } = await import(
          `../assets/images/gifs/${id}GIF.gif`
        );
        if (isMounted) {
          setCharacterGif(gif);
        }
      } catch (error) {
        console.error('Error loading image', error);
      }
    };
    importImage();
    return () => {
      isMounted = false;
      setCharacterGif(null);
    };
  }, [id]);

  return (
    <div id="character-overview-container">
      {/* TODO: finish overview component */}
      <div className="overview-info">
        <h3 className="overview-text">{`Mod: ${author}`}</h3>
        <div className="overview-text">{overview}</div>
      </div>
      {characterGif && (
        <img className="character-gif" src={characterGif} alt={`${id} image`} />
      )}
    </div>
  );
}
