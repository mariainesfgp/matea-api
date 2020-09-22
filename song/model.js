const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://maria:maria@cluster0.qv82e.mongodb.net/proyecto-mod-3?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true });

const Schema =  mongoose.Schema;

const songSchema = new Schema({
    name:  String,
    album: String,
    duration:   String,
    artist: String
  });

  const Song = mongoose.model('Song', songSchema);

  async function getAllSongs(){
      return await Song.find({});
  }

  async function addSong(song){
      var newSong = new Song(song);
      await newSong.save();
  }

  module.exports = {
      getAllSongs,
      addSong
  }