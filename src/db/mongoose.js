const mongoose = require('mongoose');

// connecting to database & including options object
// mongodb protocol, local IP address, port: 27017, database name: task-app-api
mongoose.connect('mongodb://127.0.0.1:27017/task-app-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

// // define our first model - basic version of 'user' model
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// // create an instance of the model
// const me = new User({
//     name: 'John',
//     age: 27
// })

// // use methods to save the model instance into DB
// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// })

// challenge: create Task model
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// challenge: create instance of Task
const task = new Task({
    description: 'Learn Mongoose libary.',
    completed: false
})

// challenge: use 'save()' method to save the instance into DB
task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})