import React from 'react'
import { Link } from 'react-router-dom';



export default function CharacterOverview({ overview }) {
  console.log(overview);
  return (
    <div>

      <Link to={`/${character.id}/changelog`} ></Link>
      <Link to={`/${character.id}/moves`} ></Link>
      <Link to={`/${character.id}/overview`} ></Link>

    </div>
  )
}
