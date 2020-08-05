import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema); // this is the player object from playerModel

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body) // create the body of the request  
    // whatever data we are going to send FROM the request is going to be inserted inside of that particular variable
    newPlayer.save( (err, Player) => { // if there is an error..
        if(err){
            res.send(err);
        }
        res.json(Player);
     });
}

export const getPlayers = (req, res) => {
    // let newPlayer = new Player(req.body) 
    Player.find( {}, (err, Player) => {  // .find() is something that MonogoDB has that will find all the players we have
        if(err){
            res.send(err);
        }
        res.json(Player);
     });
}