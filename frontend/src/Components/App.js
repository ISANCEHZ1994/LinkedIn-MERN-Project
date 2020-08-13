import React from 'react';
import Axios from 'axios';
import PlayerList from '../Components/Players/PlayerList';
import PlayerForm from '../Components/Players/PlayerForm';
import PlayerSingle from '../Components/Players/PlayerSingle';

import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      players: [],
      currentPlayer: {}
    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount(){
    const url = 'http://localhost:3001/players';
    Axios.get(url)
    .then( resp => {
      this.setState({
        players: resp.data
      })
    })
    .catch((error => {
      console.log(error)
    }))
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    })
  }

  render(){

    return (
   <div className='container-fluid'>
      <div className="row">
      <nav>
        <div className="nav-wrapper green darken-3">
          <a href="/" className="brand-logo">Soccer Management</a>
          {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul> */}
        </div>
      </nav>
        {/* <div className="col s12">Menu</div> 12 is the number of spaces you can use for a particular area */}
      </div>
      <div className="row">
        <div className="col s3">
          <PlayerList 
          players={this.state.players} 
          updateCurrentPlayer={this.updateCurrentPlayer}
          />
        </div>
        <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
      </div>
      <div className="row">
        <div className="col s12"><PlayerForm/></div>
      </div>
   </div>
  )};
};

export default App;
