const express = require('express');
const shortid = require("shortid");

const server = express();

server.use(express.json());

let users = [];

const PORT = 5000;
server.listen(PORT, () => 
    console.log(`\n ** API on http://localhost:${PORT} ** \n`)
);

server.post('/api/users', (req, res) => {
    const userInfo = req.body

    userInfo.name = "Timmy"
    userInfo.bio = "A Developer"

    if (userInfo.name && userInfo.bio) {
        userInfo.id = shortid.generate();

        users.push(userInfo);

        res.status(201).json(userInfo);
    } else if (!userInfo.name || !userInfo.bio){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
    }
})

server.get('/api/users', (req, res) => {

    if (users){
        res.status(200).json(users);
    } else {
        res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
    }
})

server.get('/api/users/:id', (req, res) => {
    
    if (users.id){
        res.status(200).json(users.id)
    } else if (!users.id) {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        res.status(500).json({ errorMessage: "The user information could not be retrieved." })
    }
})