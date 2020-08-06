import React from 'react';
import PlayerList from '../Components/Players/PlayerList';
import PlayerForm from '../Components/Players/PlayerForm';
import PlayerSingle from '../Components/Players/PlayerSingle';

import './App.css';

function App() {
  return (
   <div className='container-fluid'>
      <div className="row">
        <div className="col s12">Menu</div> {/* 12 is the number of spaces you can use for a particular area*/}
      </div>
      <div className="row">
        <div className="col s3"><PlayerList/></div>
        <div className="col s9"><PlayerSingle/></div>
      </div>
      <div className="row">
        <div className="col s12"><PlayerForm/></div>
      </div>
   </div>
  );
}

export default App;
