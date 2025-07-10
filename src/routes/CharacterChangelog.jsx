import React from 'react';

export default function CharacterChangelog({ changelog }) {
  return (
    <div className="changelog-text">
      {changelog.map((changeItem, index) => (
        <div key={index} className='changelog-item'>
          {Object.keys(changeItem)[0] && <h3>{Object.keys(changeItem)[0]}</h3>}
          <ul>
            {Object.values(changeItem)[0].map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
