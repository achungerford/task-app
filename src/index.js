const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// configure users route/endpoint
app.post('/users', (req, res) => {
    res.send('testing');
})

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})