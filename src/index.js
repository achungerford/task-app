const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

// parse incoming JSON from user automatically
app.use(express.json());

// configure 'users' route/endpoint - CREATE
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// configure 'users' route - READ all users
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        res.status(500).send()
    })
})

// configure 'users' route - READ by id
app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        
        res.send(user);

    }).catch((e) => {
        res.status(500).send();
    })
})

// configure tasks route - CREATE
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// config tasks route - READ
app.get('/tasks', (req, res) => {    
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        res.status(500).send();
    })
})

// config tasks route - READ by id
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
        
    }).catch((e) => {
        res.status(500).send();
    })
})

// configure server to listen
app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})