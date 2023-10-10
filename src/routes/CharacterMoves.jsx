import React from 'react';
import imageMapping from './dataMapping';



export default function CharacterMoves({ moves }) {
  const { assists, command_normals, health, hypers, specials } = moves;

  // TODO: (Data Entry) Add empty properties to all characters for missing props (assists, etc)
  // TODO: (Add Feature) Symbols for assists
  // TODO: (Add Feature) Health Bar comparison

  return (
    <div id='character-moves'>
      <div className="health">
        <div>Health</div>
        {health}
      </div>

      <div className="assists">
        <h2 id='assists-banner'>Assists</h2>
        <div className='move-name'>{assists[0]}</div>
        <div className='move-name'>{assists[1]}</div>
        <div className='move-name'>{assists[2]}</div>
      </div>

      <div className="command-normals">
        <h2 id='command-normals-banner' >Command Normals</h2>
        {command_normals.map((cnormal) => (
          <div key={`${cnormal.name}`} className='move-details'>
            <div className='move-name'>{cnormal.name}</div>
            <div className="controller-button-inputs">
              {cnormal.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  <img src={imageMapping[input]} alt={input}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="special-moves">
        <h2 id='special-moves-banner' >Special Moves</h2>
        {specials.map((special) => (
          <div key={`${special.name}`} className='move-details'>
            <div className='move-name'>{special.name}</div>
            <div className="controller-button-inputs">
              {special.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  <img src={imageMapping[input]} alt={input}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hyper-combos">
        <h2 id='hyper-moves-banner'>Hyper Combos</h2>

        {hypers.map((hyper) => (
          <div key={`${hyper.name}`} className='move-details'>
            <div className='move-name'>{hyper.name}</div>
            <div className="controller-button-inputs">
              {hyper.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  <img src={imageMapping[input]} alt={input} className={`${input}-button`}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
