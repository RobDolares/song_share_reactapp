import React, { Component } from 'react';
import './styles/App.css';

import PlayList from './components/PlayList'
import NavBar from './components/NavBar'
import PlayListForm from './components/PlayListForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="align-middle">
          <NavBar />
        </div>
        <div className="row">
            <PlayListForm />
            <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
