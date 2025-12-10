import mongoose, { mongo } from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
    ref : 'user'
    },
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    },
    body : {
        type : String,
        required : true
    }
});


const Commnet = mongoose.model("Comment", CommentSchema);
export default Comment;