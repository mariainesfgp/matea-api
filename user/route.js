const controller = require('./controller.js');

async function getUsers(req,res){
    try
    {
        var users = await controller.findAllUsers();
        res.status(200).send(users);
    }
    catch(e){
        res.status(500).send('Hubo un error ' + e);
    }
}

async function postUser(req, res){
    try
    {
        await controller.addUser(req.body);
        res.status(201).send('El usuario se creó con éxito');

    }
    catch(e)
    {
        res.status(500).send('Hubo un error ' + e);

    }
}

module.exports = {
    getUsers,
    postUser
}