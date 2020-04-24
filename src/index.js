const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

// config express to parse incoming JSON from user automatically
app.use(express.json());

// configure users route/endpoint
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user);
    }).catch(() => {

    })
})

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})