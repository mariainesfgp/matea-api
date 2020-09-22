const songsController = require('./controller.js');

async function getSongs(req,res){
    try
    {
        var songs = await songsController.findAllSongs();
        res.status(200).send(songs);
    }
    catch(e){
        res.status(500).send('Hubo un error ' + e);
    }
}

async function postSong(req, res){
    try
    {
        await songsController.addSong(req.body);
        res.status(201).send('La cancion se agregó con éxito')

    }
    catch(e)
    {
        res.status(500).send('Hubo un error ' + e);

    }
}


module.exports = {
    getSongs,
    postSong
}