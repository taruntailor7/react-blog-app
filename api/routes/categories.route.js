import express from 'express';
import categoriesModel from "../models/categories.model.js"

const router = express.Router();

//Post Category
router.post('/', async (req, res)=>{
    const category = req.body
    try {
        let existCategoryWithName = await categoriesModel.findOne({name : category.name})
        if(existCategoryWithName){
            res.status(400).send({
                message: "Category already exists"
            });
        } else {
            let newCategory = await categoriesModel.create(category)
            return res.send(newCategory);
        }  
    } catch (error) {
        res.status(500).send(error);
    }
})

//Get Category
router.get('/', async (req, res)=>{
    try {
        let categories = await categoriesModel.find();
        res.send({
            status: true,
            data: categories
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

export default router