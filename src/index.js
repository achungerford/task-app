const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

// config express to parse incoming JSON from user automatically
app.use(express.json());

// ----------------- User -------------------------

// configure 'users' route/endpoint - CREATE
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// configure 'users' route/endpoint for finding multiple users - READ
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        res.status(500).send()
    })
})

// configure 'users' route/endpoint for fetching an individual user by id - READ
app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        
        res.send(user);

    }).catch((e) => {
        res.status(500).send()
    })
    
    console.log(req.params);
})

// ------------- Task -----------------------------

// configure 'tasks' route/endpoint - CREATE
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((e) => {
        res.status(400).send(e);
    })
})





app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})