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
};

export const getPlayers = (req, res) => {
    // let newPlayer = new Player(req.body) 
    Player.find( {}, (err, Player) => {  // .find() is something that MonogoDB has that will find all the players we have
        if(err){
            res.send(err);
        }
        res.json(Player);
     });
};

export const getPlayerWithId = (req, res) => {
    Player.findById(req.param.PlayerId, (err, Player) => {  // when we send a request to get a specifc player ID 
        // we want it to look for that specifc ID
        if(err){
            res.send(err);
        }
        res.json(Player);
     });
};

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate( {_id: req.params.PlayerId}, req.body, {new: true}, (err, Player) => { // first we find the id that we want to update then (req.body)
        // we pass what we have as data in our body - I believe it means that all other data will be the same except for the data that is getting updating
        // the reason we put { new: true } is so that our updated player gets displayed and not the previous one
        if(err){
            res.send(err);
        }
        res.json(Player);
     });
};

export const deletePlayer = (req, res) => {
    Player.remove({_id: req.params.PlayerId}, (err, Player) => {  // when we send a request to get a specifc player ID 
        // we want it to look for that specifc ID
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted player!' });
     });
};