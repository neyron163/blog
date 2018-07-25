import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const User = new Schema({
    userName: String,
    userPassword: String,
    privilege: Number
});


export default mongoose.model('UsersModel', User);