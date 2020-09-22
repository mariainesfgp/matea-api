const mongoose = require('mongoose');

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
      addSong,
      Song: Song
  }