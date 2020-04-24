const mongoose = require('mongoose');

// connecting to database & including options object
// mongodb protocol, local IP address, port: 27017, database name: task-app-api
mongoose.connect('mongodb://127.0.0.1:27017/task-app-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

// create Task model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

// create instance of Task
const task = new Task({
    description: 'Learn Mongoose libary.'
})

// use 'save()' method to save the instance into DB
task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})