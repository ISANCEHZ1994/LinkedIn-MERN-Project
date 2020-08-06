import { 
    addNewPlayer, 
    getPlayers, 
    getPlayerWithId,
    updatePlayer,
    deletePlayer
         } 
    from '../controllers/playerControllers';


const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
    // GET Specific Player
    .get(getPlayerWithId)
    // UPDATE Specifc Player
    .put(updatePlayer)
    // DELETE Specifc Player
    .delete(deletePlayer)
}

export default routes;