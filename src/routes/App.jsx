import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import CharacterSidebar from './CharacterSidebar';
import Header from './Header';
import ErrorPage from '../ErrorPage';
import Layout from './Layout';
import CharacterDetails from './CharacterDetails';

import CharacterOverview from './CharacterOverview';
import CharacterMoves from './CharacterMoves';
import CharacterChangelog from './CharacterChangelog';

const characterData = require('../data/characterData');

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout characterData={characterData} />}>
          {characterData.map((character) => (<Route key={character.id} path={`/${character.id}`} element={<CharacterDetails character={character} errorElement={ErrorPage}/>}>
            <Route index key={character.overview} path={`/${character.id}/overview`} element={<CharacterOverview />} ></Route>
            <Route key={character.moves} path={`/${character.id}/moves`} element={<CharacterMoves />} ></Route>
            <Route key={character.changelog} path={`/${character.id}/changelog`} element={<CharacterChangelog />} ></Route>
          </Route>))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
