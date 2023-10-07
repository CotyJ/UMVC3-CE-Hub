import React from 'react';

export default function CharacterMoves({ moves }) {
  const { assists, command_normals, health, hypers, specials } = moves;

  return (
    <div>
      <div className="health">
        <div>Health</div>
        {health}
      </div>

      <div className="assists">
        <div>Assists</div>
        <div>{assists[0]}</div>
        <div>{assists[1]}</div>
        <div>{assists[2]}</div>
      </div>

      <div className="command-normals">
        <div>Command Normals</div>
        {command_normals.map((cnormal) => (
          <div key={`${cnormal.name}`}>
            <div>{cnormal.name}</div>
            <div className="controller-button-inputs">
              {cnormal.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  {input}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="special-moves">
        <div>Special Moves</div>
        {specials.map((special) => (
          <div key={`${special.name}`}>
            <div>{special.name}</div>
            <div className="controller-button-inputs">
              {special.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  {input}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hyper-combos">
        <div>Hyper Combos</div>

        {hypers.map((hyper) => (
          <div key={`${hyper.name}`}>
            <div>{hyper.name}</div>
            <div className="controller-button-inputs">
              {hyper.input.map((input, index) => (
                <div key={index} className="controller-input-button">
                  {input}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
