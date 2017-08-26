import React from 'react'

const PlayListItem = (props) => {

  return (
    <li className="list-group-item">
      <ul>
        <li>
          <div>User: {props.song.userName}</div>
        </li>
        <li>
          <div>Artist/Band: {props.song.songArtist}</div>
        </li>
        <li>
          <div>Title: {props.song.songTitle}</div>
        </li>
        <li>
          <div>Notes: {props.song.songNotes}</div>
        </li>
      </ul>
    </li>
  )
}

export default PlayListItem;
