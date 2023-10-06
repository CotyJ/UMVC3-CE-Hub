import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import CharacterSidebar from './CharacterSidebar';

import Header from './Header';
import ErrorPage from '../ErrorPage';
import Layout from './Layout';
import CharacterDetails from './CharacterDetails';


const characterData = require('../data/characterData');

// console.log(characterData);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout characterData={characterData}/>} >

          {characterData.map((character) => (
            <Route
              key={character.name}
              path={`/${character.name}`}
              element={<CharacterDetails character={character}/>}
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
