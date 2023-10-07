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
      </div>

      <div className="special-moves">
        <div>Special Moves</div>
      </div>

      <div className="hyper-combos">
        <div>Hyper Combos</div>
      </div>
    </div>
  );
}
