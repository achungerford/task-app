const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

// config express to parse incoming JSON from user automatically
app.use(express.json());

// configure users route/endpoint
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

// configure tasks route
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.send(task);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})