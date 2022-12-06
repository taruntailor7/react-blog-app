import mongoose from "mongoose"

const CategoriesSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
    },
    {timestamps : true, versionKey: false}
);

const categoriesModel = mongoose.model("categories", CategoriesSchema)

export default categoriesModel