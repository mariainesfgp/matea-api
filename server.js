const express = require('express');
const songsController = require('./song/controller.js');
var server = express();

server.use(express.json());
server.listen(4000);
console.log('Servidor andando en puerto 4000');

server.get('/songs/', async function(req,res){
    try
    {
        var songs = await songsController.findAllSongs();
        res.status(200).send(songs);
    }
    catch(e){
        res.status(500).send('Hubo un error ' + e);
    }
})

server.post('/songs/', async function(req, res){
    try
    {
        await songsController.addSong(req.body);
        res.status(201).send('La cancion se agregó con éxito')

    }
    catch(e)
    {
        res.status(500).send('Hubo un error ' + e);

    }
})