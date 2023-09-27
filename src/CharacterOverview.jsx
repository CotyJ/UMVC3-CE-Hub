import React from 'react';

export default function Overview({ characterData }) {
  return (
    <div>
      <h2>Overview</h2>
      <p>Name: {characterData.name}</p>
      <p>Age: {characterData.age}</p>
    </div>
  );
}
