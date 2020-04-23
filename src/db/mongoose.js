const mongoose = require('mongoose');
const validator = require('validator');

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
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannon contain "password"');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    }
})

// create an instance of the model
const me = new User({
    name: 'John      ',
    email: '   MYEMAIL@MEAD.IO',
    password: 'phone123'
})

// use methods to save the model instance into DB
me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error!', error);
})

// // create Task model
// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// // create instance of Task
// const task = new Task({
//     description: 'Learn Mongoose libary.',
//     completed: false
// })

// // use 'save()' method to save the instance into DB
// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// })