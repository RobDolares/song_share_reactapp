import React, {Component} from 'react'

import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    };

    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  render() {

      let songlist = this.state.songs.map((song) => {
        return (
          <PlayListItem key={song._id} song={song} />
        )
      })

      return (
        <div className="col-lg-6">
          <button className="btn" onClick={this.fetchData}>Update</button>
          {songlist}
        </div>
      )
  }
}
