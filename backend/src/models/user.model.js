import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    userName : {
        type: String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,

    },
    userImage:{
        type: String,
        default: "https://tse3.mm.bing.net/th/id/OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa?pid=Api&P=0&h=180"

    }
},{timestamps:true})

// new Schema({

// },{timestamps: true})

const User = mongoose.model('User', userSchema);

export default User;