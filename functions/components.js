const dot = require('dotenv').config();

const faunadb = require('faunadb');
const client = new faunadb.Client({ secret: process.env.FAUNADB_KEY })

console.log(client);
console.log(dot);