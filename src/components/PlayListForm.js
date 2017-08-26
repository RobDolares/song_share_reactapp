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
      <div className="col-lg-6 card-block">

        <form onSubmit={this.addToList}>
          <div className="form-group">
            <h5 >User Name:</h5>
            <input value={this.state.userName} onChange={this.userNameChange} className="form-control" name="userName" rows="1" type="text" placeholder="Enter Name or Username"/>
          </div>
          <div className="form-group">
            <h5>Artist/Band:</h5>
            <input value={this.state.songArtist} onChange={this.songArtistChange} className="form-control" name="userName" rows="1" type="text" placeholder="Enter Artist of Band"/>
          </div>
          <div className="">
            <h5>Song Title:</h5>
            <input value={this.state.songTitle} onChange={this.songTitleChange} className="form-control" name="userName" rows="1" type="text" placeholder="Enter song title"/>
          </div>
          <div className="">
            <h5>Notes about Song:</h5>
            <input type="textbox" value={this.state.songNotes} onChange={this.songNotesChange} className="form-control" name="userName" rows="1" type="text" placeholder="Name or Username"/>
          </div>

          <button className="btn btn-primary btn-lg" type="submit" value="Submit">Submit</button>
        </form>

      </div>

    );

  }

}
