import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const PORT = 3001;

// Mongo Connection - we are now connected to MongoDB and can use it however we like
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Body-Parser Setup - used to transpile the request into something that mongo/database can understand
app.use(bodyparser.urlencoded( { extended: true } ) ); // allows use to pass the request and encode it properly
app.use(bodyparser.json()); 

app.get('/', ( req, res ) => // when we have a REQUEST we want a RESPONSE
    res.send(`Our Soccer Game is running on ${PORT}`)
) 

app.listen(PORT, () => 
    console.log(`Your soccer server is running on port ${PORT}`)
)

// get '/' => controller#method
// controller
// def something 
// json: "this is our message"
// end

// get '/' do 
// "hey hey hey"
// end
