import React from 'react';
import { Link } from 'react-router-dom';
import CharacterSidebar from './CharacterSidebar';

const logo = require('../assets/images/umvc3CELogoM.jpg');

export default function Header({ characterData }) {
  return (
    <header>
      <Link to="/" id="header-img">
        <img id="logo" src={logo}></img>
      </Link>
      <CharacterSidebar characterData={characterData} />
    </header>
  );
};
