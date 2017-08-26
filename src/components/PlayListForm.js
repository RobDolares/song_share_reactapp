import React, {Component} from 'react'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }

    this.addToList = this.addToList.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
    this.songArtistChange = this.songArtistChange.bind(this);
    this.songTitleChange = this.songTitleChange.bind(this);
    this.songNotesChange = this.songNotesChange.bind(this);

  }

  userNameChange(e) {
    e.preventDefault()
    this.setState({userName: e.target.value})
  }

  songArtistChange(e) {
    e.preventDefault()
    this.setState({songArtist: e.target.value})
  }

  songTitleChange(e) {
    e.preventDefault()
    this.setState({songTitle: e.target.value})
  }

  songNotesChange(e) {
    e.preventDefault()
    this.setState({songNotes: e.target.value})
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }

  render() {
    return (
      <div className="col-lg-4 card-block">

        <form id="playlist-form" className="card-block" onSubmit={this.addToList}>

          <div className="form-group">
            <p>User Name:</p>
            <input className="form-control" value={this.state.userName} onChange={this.userNameChange} name="userName" rows="1" type="text" placeholder="Enter Your Name or Username"/>
          </div>

          <div className="form-group">
            <p>Artist / Band:</p>
            <input className="form-control" value={this.state.songArtist} onChange={this.songArtistChange} name="userName" rows="1" type="text" placeholder="Enter Artist of Band"/>
          </div>

          <div className="form-group">
            <p>Song Title:</p>
            <input className="form-control" value={this.state.songTitle} onChange={this.songTitleChange} name="userName" rows="1" type="text" placeholder="Enter Song Title"/>
          </div>

          <div className="form-group">
            <p>Notes about Song:</p>
            <textarea id="notes-input" form="playlist-form" rows="5" className="form-control" type="text" value={this.state.songNotes} onChange={this.songNotesChange} name="userName" type="text" placeholder="Notes"></textarea>
          </div>

          <button id="form-btn" className="btn btn-lg" type="submit" value="Submit">Submit</button>

        </form>
        <div id="hr"></div>
      </div>

    );

  }

}
