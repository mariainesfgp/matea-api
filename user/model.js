const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const userSchema = new Schema({
    name:  String,
    lastName: String,
    mail:   String,
    age: Number,
    likedSongs: { type: [Schema.ObjectId], ref: "Song"} 
  });

  const User = mongoose.model('User', userSchema);

  async function getAllUser() { 
      return await User.find({});
  }

  async function addUser(user){
      var newUser = new User(user);
      await newUser.save();
  }

  module.exports = {
        getAllUser,
        addUser
  }