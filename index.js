const express = require('express');
const shortid = require("shortid");

const server = express();

server.use(express.json());

let users = [];

const PORT = 5000;
server.listen(PORT, () => 
    console.log(`\n ** API on http://localhost:${PORT} ** \n`)
);