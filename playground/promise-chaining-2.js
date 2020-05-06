require('../src/db/mongoose');
const Task = require('../src/models/task');

// remove a given task by id
// get and print the total number of incomplete tasks

Task.findByIdAndDelete('5ea1c0a64a7a6926a8a4ed53').then(() => {
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})