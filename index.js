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
    if (userInfo.name && userInfo.bio) {
        userInfo.id = shortid.generate();

        users.push(userInfo);

        res.status(201).json(userInfo);
    } else {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    }
})