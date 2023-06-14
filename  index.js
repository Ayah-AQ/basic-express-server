require('dotenv').config();
// const server = require('./src/server');
const {start} = require('./src/server')
const PORT = process.env.PORT ||8000;

start(PORT);