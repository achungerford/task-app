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

    // updating user name; updateOne returns a promise if no callback provided
    // so we can save this code as 'updatePromise'
    const updatePromise = db. collection('users').updateOne({
        _id: new ObjectID("5e93db39b92a0d1864aad5c9")
    }, {
        $set: {
            name: 'Mike'
        }
    })

    updatePromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})