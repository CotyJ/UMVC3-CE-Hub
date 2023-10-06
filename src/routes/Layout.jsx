import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout({characterData}) {
console.log(characterData);

  return (
    <>
      <Header characterData={characterData}/>
      <Outlet />
    </>
  )
}
