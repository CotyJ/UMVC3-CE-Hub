import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Splash from './Splash';

export default function Layout({ characterData }) {
  const location = useLocation();

  const isRoot = location.pathname === '/';

  return (
    <>
      <Header characterData={characterData} />
      {isRoot && <Splash />}
      <Outlet />
    </>
  );
}
