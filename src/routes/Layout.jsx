import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout({characterData}) {

  return (
    <>
      <Header characterData={characterData}/>

      {/* TODO: proper homepage with general changes and updates */}
      <Outlet />
    </>
  )
};
