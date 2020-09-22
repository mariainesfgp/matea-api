const express = require('express');
const songsRoute = require ('./song/route.js')
const userRoute = require ('./user/route.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://maria:maria@cluster0.qv82e.mongodb.net/proyecto-mod-3?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true });

var server = express();
server.use(express.json());
server.listen(4000);
console.log('Servidor andando en puerto 4000');

//Songs
server.get('/songs/', songsRoute.getSongs)
server.post('/songs/', songsRoute.postSong)

//Users
server.get('/users/', userRoute.getUsers)
server.post('/users/', userRoute.postUser)
