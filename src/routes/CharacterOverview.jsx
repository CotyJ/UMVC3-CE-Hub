import React from 'react'

export default function CharacterOverview({ overview, author }) {
  return (
    <div>
      <div>{overview}</div>
      <div>{author}</div>
    </div>
  )
}
