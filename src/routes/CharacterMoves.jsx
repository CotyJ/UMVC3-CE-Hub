import React from 'react';
import imageMapping from './dataMapping';

const Alpha = require('../assets/images/assist_images/Alpha.png');
const Beta = require('../assets/images/assist_images/Beta.png');
const Gamma = require('../assets/images/assist_images/Gamma.png');

export default function CharacterMoves({ moves, name }) {
  const { assists, command_normals, health, hypers, specials } = moves;

  return (
    <div id="character-moves">
{assists ?
      <div id="assists">
        <h2 id="assists-banner">Assists</h2>
        <div className="assist-container">
          <img className='assist-image' src={Alpha}/>
          <div className="move-details move-name">{assists[0]}</div>
        </div>
        <div className="assist-container">
          <img className='assist-image' src={Beta}/>
          <div className="move-details move-name">{assists[1]}</div>
        </div>
        <div className="assist-container">
          <img className='assist-image' src={Gamma}/>
          <div className="move-details move-name">{assists[2]}</div>
        </div>
      </div>
      : <div>No Data</div>
}
      <div id="command-normals">
        <h2 id="command-normals-banner">Command Normals</h2>
        {command_normals ? (command_normals.map((cnormal) => (
          <div key={`${cnormal.name}`} className="move-details">
            <div className="move-name">{cnormal.name}</div>
            <div className="controller-button-inputs">
              {cnormal.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  <img src={imageMapping[input]} alt={input} />
                </div>
              ))}
            </div>
          </div>
        ))): <p>No command normals available.</p>}
      </div>

      <div id="special-moves">
        <h2 id="special-moves-banner">Special Moves</h2>
        {specials.map((special) => (
          <div key={`${special.name}`} className="move-details">
            <div className="move-name">{special.name}</div>
            <div className="controller-button-inputs">
              {special.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  <img src={imageMapping[input]} alt={input} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="hyper-combos">
        <h2 id="hyper-moves-banner">Hyper Combos</h2>

        {hypers.map((hyper) => (
          <div key={`${hyper.name}`} className="move-details">
            <div className="move-name">{hyper.name}</div>
            <div className="controller-button-inputs">
              {hyper.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  <img
                    src={imageMapping[input]}
                    alt={input}
                    className={`${input}-button`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
