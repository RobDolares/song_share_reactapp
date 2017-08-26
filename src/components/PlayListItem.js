import React from 'react'

const PlayListItem = (props) => {

  return (
    <li className="card-block list-group col-lg-6 col-md-6">
      <ul className="list-group card-block">
        <li className="list-group-item borderless">
          <div>
            <span>User:</span>
            {props.song.userName}</div>
        </li>
        <li className="list-group-item borderless">
          <div>
            <span>Artist/Band:</span>
            {props.song.songArtist}</div>
        </li>
        <li className="list-group-item borderless">
          <div>
            <span>Title:</span>
            {props.song.songTitle}</div>
        </li>
        <li className="list-group-item borderless">
          <div>
            <span>Notes:</span>
            {props.song.songNotes}</div>
        </li>
      </ul>
    </li>
  )
}

export default PlayListItem;
