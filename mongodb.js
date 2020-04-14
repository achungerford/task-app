// /c/Users/Alexander/mongodb/bin/mongod.exe --dbpath=/c/Users/Alexander/mongodb-data
// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath=/c/Users/Alexander/mongodb-data

// destructuring
const { MongoClient, ObjectID } = require('mongodb');

// define connections
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

// connect to server
MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }

    // creating a connection for a specific database
    const db = client.db(databaseName);

    // // insert a single document into a collection called 'users'
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.');
    //     }

    //     console.log(result.ops);
    // })

    
//    // how to bulk-insert documents into a collection
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Alex',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Eat breakfast',
    //         completed: true
    //     }, {
    //         description: 'Make lunch',
    //         completed: true
    //     }, {
    //         description: 'Cook dinner',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!');
    //     }

    //     console.log(result.ops);
    // })
})

