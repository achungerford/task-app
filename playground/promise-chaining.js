 require('../src/db/mongoose');
 const User = require('../src/models/user');

User.findByIdAndUpdate('5eab98bc08227338685a0294', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

// to use async-await we must begin with an async function
// accept input: id, age
const updateAgeAndCount = async (id, age) => {
    // find & provide updates to be applied { shorthand }
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}