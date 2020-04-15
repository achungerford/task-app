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

    // retrieving data from the database
    db.collection('users').findOne({ _id: new ObjectID("5e96482975de2f494c1f75ed") }, (error, user) => {
        if (error) {
            return console.log('Unable to retreive data.');
        }

        console.log(user);
    })

    // retrieving more than one document from the database - 'find'
    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        if (error) {
            return console.log('Unable to retrieve data.');
        }
        
        console.log(users);
    })
})

