import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

const app = express();
const PORT = 3001; // different from our frontend PORT - cannot have two programs running in the same PORT

// Mongo Connection - we are now connected to MongoDB and can use it however we like
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Body-Parser Setup - used to transpile the request into something that mongo/database can understand
app.use(bodyparser.urlencoded( { extended: true } ) ); // allows use to pass the request and encode it properly
app.use(bodyparser.json()); // json stands for JavaScript Object Notation - lightweight format for storing and transporting data 
// It is primarily used to transmit data between a server and web applications.

// CORS Setup
app.use( cors() ); // cors stands for Cross Origin Resource Sharing - allows restricted resources on a web page to be 
// requested from another domain outside the domain from which the first resource was served

routes(app);

// EXPRESS ROUTING -------------------------------------->

// we created the route '/'  with a callback function to run
app.get('/', ( req, res ) => // when we have a REQUEST we want a RESPONSE --> ALWAYS DO IT THIS WAY
    res.send(`Our Soccer Game is running on ${PORT}`)
) 

app.listen(PORT, () => 
    console.log(`Your soccer server is running on port ${PORT}`)
)
