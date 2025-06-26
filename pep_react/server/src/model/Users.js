const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email : {type:String,required: true,unique: true},
    // password : {type:String,required: true},
    password : {type:String,required: false}, // now false as we use google auth, pass is not required
    name : {type:String,required: true},

    //added these in shema , after adding google auth
    isGoogleUser:{type:String,required:false},
    googleId:{type:String,required:false},
});

module.exports = mongoose.model('users', UserSchema);