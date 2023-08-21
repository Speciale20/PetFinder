

// import the pets array from data.js
const pets = require('./data');


// init express app
const express = require('express');
const app = express();

const PORT = 5500
    ;




// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.send('/')
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', async (req, res) => {
    // send the pets array as a response

    res.send(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const ownerName = req.query.owner

    // find the pet in the pets array
    const owner = pets.find(pets => pets.owner === ownerName);

    // send the pet as a response
    res.send(owner)

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const puppyName = req.query.name;
    const singlePuppy = pets.find((pets) => pets.name === puppyName);
    res.send(pets);

    // find the pet in the pets array


    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;