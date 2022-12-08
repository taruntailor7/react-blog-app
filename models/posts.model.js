import mongoose from "mongoose"

const PostSchema = new mongoose.Schema(
    {
        title :{
            type: String,
            required: true,
            unique: true
        },
        desc : {
            type: String,
            required: true
        },
        photo : {
            type: String,
            required:false
        },
        username : {
            type: String,
            required:true
        },
        categories : {
            type: Array,
            required:false
        },
    },
    {timestamps : true, versionKey: false}
)

const postModel = mongoose.model("posts", PostSchema)

export default postModel