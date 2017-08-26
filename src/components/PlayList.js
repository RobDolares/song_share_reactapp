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
      return (<PlayListItem key={song._id} song={song}/>)
    })

    return (
      <div className="row card-block col-lg-8">
        <button id="update-btn" className="btn btn-md card-block col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-4 offset-sm-4 col-xs-4 offset-xs-4 " onClick={this.fetchData}>Update Public Feed</button>
        <div className="row">
          {songlist}
        </div>
      </div>
    )
  }
}
