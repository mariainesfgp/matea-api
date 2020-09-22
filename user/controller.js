const model = require('./model.js')

async function findAllUsers(){
    return await model.getAllUser(); 
}

async function addUser(user){
    return await model.addUser(user);
}

module.exports = {
    findAllUsers,
    addUser
}