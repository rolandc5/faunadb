const dot = require('dotenv').config();

const faunadb = require('faunadb');
const client = new faunadb.Client({ secret: process.env.FAUNADB_KEY })

exports.handler = function (event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: "Hello, World"
    });
  };