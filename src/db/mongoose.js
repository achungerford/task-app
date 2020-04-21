const mongoose = require('mongoose');

// connecting to database & including options object
// mongodb protocol, local IP address, port: 27017, database name: task-app-api
mongoose.connect('mongodb://127.0.0.1:27017/task-app-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

// define our first model - basic version of 'user' model
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// create an instance of the model
const me = new User({
    name: 'John',
    age: 27
})

// challenge: define bas