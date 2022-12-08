import express from 'express';
import userModel from "../models/users.model.js";
import postModel from "../models/posts.model.js"
import bcrypt from "bcryptjs";

const router = express.Router();

//Update User
router.put('/:id',async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            req.body.password = bcrypt.hashSync(req.body.password);
        }
        try {
            const updateUser = await userModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set : req.body,
                },
                {new : true}
            );
            res.send({
                status : "success",
                data : updateUser
            })
        } catch (error) {
            res.status(500).send({
                message: error
            });
        }
    } else {
        res.status(401).send({
            error : true,
            message: "You can update only your account"
        })
    }
})

//Delete User
router.delete('/:id',async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await userModel.findById(req.params.id);
            try {
                await postModel.deleteMany({username : user.username});
                const deletedUser = await userModel.findByIdAndDelete(req.params.id);
                res.send({
                    message : "User has been deleted...",
                    data : deletedUser
                })
            } catch (error) {
                res.status(404).send({
                    message: "User not found!"
                });
            }
        } catch (error) {
            res.status(500).send({
                message: error
            });
        }
    } else {
        res.status(401).send({
            error : true,
            message: "You can delete only your account"
        })
    }
})

//Get User
router.get("/:id", async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);
        // 1st way to delete users password
        user = user.toJSON();
        delete user.password;
        res.send(user);

        // 2nd way to delete users password using spread operator
        // const { password, ...others } = user._doc
        // res.send(others);
    } catch (error) {
        res.status(500).send(error);
    }
})
export default router