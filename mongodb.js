// /c/Users/Alexander/mongodb/bin/mongod.exe --dbpath=/c/Users/Alexander/mongodb-data
// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath=/c/Users/Alexander/mongodb-data

// modules
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// define connections
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

// connect to server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }

    console.log('Connected correctly');
})