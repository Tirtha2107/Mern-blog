import mongoose, { Schema } from 'mongoose';

const commentsSchema = new Schema({
    content : {
        type: String,
        required: true,
    },
    UserId:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    postId:{
        type: mongoose.Types.ObjectId,
        ref: "Post",
        required: true,

    },
    likes:{
        type: [mongoose.Types.ObjectId],
        ref : "User",
        default: [], //0 likes
    },
    
},{timestamps:true})



const Comments = mongoose.model('Comments', commentsSchema);

export default Comments;