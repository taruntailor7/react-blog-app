import express from 'express';
import userModel from "../models/users.model.js"
import bcrypt from "bcryptjs";

const router = express.Router();

//Register
router.post('/register',async (req, res) => {
    try {
        const user = req.body
        let { username, email, password} = user;

        let userExists = await userModel.findOne({email});
        let usernameExists = await userModel.findOne({username});
        if(userExists){
            return res.status(400).send({
                status: false,
                message: 'User already exists'
            })
        }
        else if(usernameExists){
            return res.status(400).send({
                status: false,
                message: 'Username already taken'
            })
        }
        else{
            password = bcrypt.hashSync(password);
            let newUser = await userModel.create({
                username,email,password
            })
            newUser = newUser.toJSON();
            delete newUser.password;
            return res.send(newUser)
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
})

export default router