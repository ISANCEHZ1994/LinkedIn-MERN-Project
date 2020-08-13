import React from 'react';


const PlayerList = (props) => {
    return(
        <div>
            {console.log(props)}
           <ul className='collection with-header'>
               <li className='collection-header'>
                    <h4>Players</h4>  
               </li>
               {props.players.map( player => (
                   <a href='#!' 
                   className='collection-item' 
                   key={player.id}
                   onClick={props.updateCurrentPlayer.bind(this,player)}
                   > 
                   {player.firstName} 
                   {player.lastName}
                   </a>
               ))}
           </ul>
        </div>
    );
}

export default PlayerList;