import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

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
        <Route path="/" element={<Layout characterData={characterData} errorElement={ErrorPage}/>}>
          {characterData.map((character) => (
            <Route
              key={character.id}
              path={`/${character.id}`}
              element={
                <CharacterDetails
                  character={character}
                  errorElement={ErrorPage}
                />
              }
            >
              <Route
                index
                key={character.id}
                path={`/${character.id}/overview`}
                element={
                  <CharacterOverview
                    overview={character.overview}
                    author={character.author}
                  />
                }
              ></Route>
              <Route
                key={character.id}
                path={`/${character.id}/moves`}
                element={<CharacterMoves moves={character.moves} />}
              ></Route>
              <Route
                key={character.id}
                path={`/${character.id}/changelog`}
                element={<CharacterChangelog changelog={character.changelog} />}
              ></Route>
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
